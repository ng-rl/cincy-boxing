import { google } from 'googleapis';
import { products } from '../data/products';
import { neighborhoods } from '../data/neighborhoods';

// Configure auth from environment variables
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Color constants (in RGB format for Google Sheets)
const COLORS = {
  gold: { red: 0.96, green: 0.62, blue: 0.04 }, // #F59E0B
  blue: { red: 0.23, green: 0.51, blue: 0.96 }, // #3B82F6
  red: { red: 0.86, green: 0.15, blue: 0.15 }, // #DC2626
  darkGray: { red: 0.16, green: 0.16, blue: 0.18 }, // #292A2E
  white: { red: 1, green: 1, blue: 1 },
};

interface SheetTab {
  title: string;
  headers: string[];
  frozenRows?: number;
  frozenColumns?: number;
}

// Define all sheet tabs and their headers
const SHEET_TABS: SheetTab[] = [
  {
    title: 'CRM',
    headers: [
      'Customer ID',
      'Name',
      'Email',
      'Phone',
      'Neighborhood',
      'Lead Status',
      'Customer Type',
      'Source',
      'Date Added',
      'Last Contact',
      'Next Follow-up',
      'Total Orders',
      'Total Sessions',
      'Total Spent',
      'Tags',
      'Notes',
    ],
    frozenRows: 1,
    frozenColumns: 2,
  },
  {
    title: 'Bookings',
    headers: [
      'Booking ID',
      'Customer ID',
      'Customer Name',
      'Session Date',
      'Session Time',
      'Duration (min)',
      'Location/Neighborhood',
      'Session Type',
      'Status',
      'Payment Status',
      'Session Price',
      'Notes',
      'Cal.com Event ID',
    ],
    frozenRows: 1,
  },
  {
    title: 'Orders',
    headers: [
      'Order ID',
      'Customer ID',
      'Customer Name',
      'Order Date',
      'Items',
      'Quantity',
      'Subtotal',
      'Total',
      'Payment Status',
      'Fulfillment Status',
      'Shipping Method',
      'Tracking Number',
      'Notes',
      'Stripe Payment ID',
    ],
    frozenRows: 1,
  },
  {
    title: 'Products',
    headers: [
      'Product ID',
      'SKU',
      'Product Name',
      'Category',
      'Price',
      'Cost (COGS)',
      'Track Inventory',
      'In Stock',
      'Reserved',
      'Available',
      'Reorder Point',
      'Last Restocked',
      'Notes',
    ],
    frozenRows: 1,
  },
  {
    title: 'Manual Lead Entry',
    headers: [
      'Name',
      'Email',
      'Phone',
      'Neighborhood',
      'Source',
      'Interests',
      'Notes',
      'Date Entered',
    ],
    frozenRows: 1,
  },
  {
    title: 'Analytics Dashboard',
    headers: ['Metric', 'Value', 'Last Updated'],
    frozenRows: 1,
  },
  {
    title: 'Activity Log',
    headers: ['Timestamp', 'Event Type', 'Customer ID', 'Description', 'Source'],
    frozenRows: 1,
  },
];

async function createSpreadsheet() {
  console.log('🚀 Creating Cincy Boxing operational spreadsheet...\n');

  // Step 1: Create the spreadsheet
  const spreadsheet = await sheets.spreadsheets.create({
    requestBody: {
      properties: {
        title: 'Cincy Boxing - Operational Hub',
      },
      sheets: SHEET_TABS.map((tab) => ({
        properties: {
          title: tab.title,
          gridProperties: {
            frozenRowCount: tab.frozenRows || 0,
            frozenColumnCount: tab.frozenColumns || 0,
          },
        },
      })),
    },
  });

  const spreadsheetId = spreadsheet.data.spreadsheetId!;
  console.log(`✅ Spreadsheet created: ${spreadsheetId}`);
  console.log(`🔗 URL: https://docs.google.com/spreadsheets/d/${spreadsheetId}\n`);

  // Step 2: Add headers to all sheets
  console.log('📝 Adding headers to all sheets...');
  const headerRequests = SHEET_TABS.map((tab, index) => ({
    range: `${tab.title}!A1`,
    values: [tab.headers],
  }));

  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId,
    requestBody: {
      valueInputOption: 'RAW',
      data: headerRequests,
    },
  });

  // Step 3: Format headers (bold, background color)
  const sheetIds = spreadsheet.data.sheets!.map((sheet) => sheet.properties!.sheetId!);
  const formatRequests = sheetIds.map((sheetId, index) => ({
    repeatCell: {
      range: {
        sheetId,
        startRowIndex: 0,
        endRowIndex: 1,
      },
      cell: {
        userEnteredFormat: {
          backgroundColor: COLORS.darkGray,
          textFormat: {
            bold: true,
            foregroundColor: COLORS.white,
          },
          horizontalAlignment: 'LEFT',
        },
      },
      fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
    },
  }));

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests: formatRequests },
  });
  console.log('✅ Headers formatted\n');

  // Step 4: Pre-populate Products tab
  console.log('📦 Populating Products tab with inventory...');
  const productRows = products.map((product, index) => [
    `PROD-${String(index + 1).padStart(3, '0')}`, // Product ID
    `SKU-${product.slug.toUpperCase()}`, // Generate SKU from slug
    product.name,
    product.category,
    product.salePrice || product.price,
    '', // Cost (COGS) - to be filled in
    product.isDigital ? 'No' : 'Yes', // Track inventory for physical products
    50, // Initial stock
    0, // Reserved
    '=H2-I2', // Available formula
    10, // Reorder Point
    new Date().toLocaleDateString(),
    '',
  ]);

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Products!A2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: productRows,
    },
  });
  console.log(`✅ Added ${products.length} products\n`);

  // Step 5: Add formulas to CRM tab
  console.log('🧮 Adding formulas to CRM tab...');
  // We'll add formulas for columns L, M, N (Total Orders, Total Sessions, Total Spent)
  // These will be added as a formula that can be copied down
  const crmSheetId = sheetIds[0]; // CRM is first tab

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        // Set formulas in row 2 as examples (user can copy down)
        {
          updateCells: {
            range: {
              sheetId: crmSheetId,
              startRowIndex: 1, // Row 2
              endRowIndex: 2,
              startColumnIndex: 11, // Column L (Total Orders)
              endColumnIndex: 12,
            },
            rows: [
              {
                values: [
                  {
                    userEnteredValue: {
                      formulaValue: '=COUNTIF(Orders!B:B,A2)',
                    },
                  },
                ],
              },
            ],
            fields: 'userEnteredValue',
          },
        },
        {
          updateCells: {
            range: {
              sheetId: crmSheetId,
              startRowIndex: 1, // Row 2
              endRowIndex: 2,
              startColumnIndex: 12, // Column M (Total Sessions)
              endColumnIndex: 13,
            },
            rows: [
              {
                values: [
                  {
                    userEnteredValue: {
                      formulaValue: '=COUNTIF(Bookings!B:B,A2)',
                    },
                  },
                ],
              },
            ],
            fields: 'userEnteredValue',
          },
        },
        {
          updateCells: {
            range: {
              sheetId: crmSheetId,
              startRowIndex: 1, // Row 2
              endRowIndex: 2,
              startColumnIndex: 13, // Column N (Total Spent)
              endColumnIndex: 14,
            },
            rows: [
              {
                values: [
                  {
                    userEnteredValue: {
                      formulaValue: '=SUMIF(Orders!B:B,A2,Orders!H:H)',
                    },
                  },
                ],
              },
            ],
            fields: 'userEnteredValue',
          },
        },
      ],
    },
  });
  console.log('✅ CRM formulas added\n');

  // Step 6: Add data validation (dropdowns)
  console.log('📋 Adding data validation dropdowns...');

  const neighborhoodNames = neighborhoods.map((n) => n.name).concat(['Other']);

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        // CRM: Lead Status dropdown (Column F)
        {
          setDataValidation: {
            range: {
              sheetId: crmSheetId,
              startRowIndex: 1,
              startColumnIndex: 5,
              endColumnIndex: 6,
            },
            rule: {
              condition: {
                type: 'ONE_OF_LIST',
                values: [
                  { userEnteredValue: 'New Lead' },
                  { userEnteredValue: 'Contacted' },
                  { userEnteredValue: 'Qualified' },
                  { userEnteredValue: 'Active Customer' },
                  { userEnteredValue: 'VIP' },
                  { userEnteredValue: 'Lapsed' },
                  { userEnteredValue: 'Lost' },
                ],
              },
              showCustomUi: true,
              strict: true,
            },
          },
        },
        // CRM: Customer Type dropdown (Column G)
        {
          setDataValidation: {
            range: {
              sheetId: crmSheetId,
              startRowIndex: 1,
              startColumnIndex: 6,
              endColumnIndex: 7,
            },
            rule: {
              condition: {
                type: 'ONE_OF_LIST',
                values: [
                  { userEnteredValue: 'Prospect' },
                  { userEnteredValue: 'Training Client' },
                  { userEnteredValue: 'E-commerce Customer' },
                  { userEnteredValue: 'Both' },
                ],
              },
              showCustomUi: true,
              strict: true,
            },
          },
        },
        // CRM: Source dropdown (Column H)
        {
          setDataValidation: {
            range: {
              sheetId: crmSheetId,
              startRowIndex: 1,
              startColumnIndex: 7,
              endColumnIndex: 8,
            },
            rule: {
              condition: {
                type: 'ONE_OF_LIST',
                values: [
                  { userEnteredValue: 'Website Contact Form' },
                  { userEnteredValue: 'Cal.com Booking' },
                  { userEnteredValue: 'Stripe Order' },
                  { userEnteredValue: 'Manual Entry' },
                  { userEnteredValue: 'Referral' },
                  { userEnteredValue: 'Social Media' },
                  { userEnteredValue: 'Walk-in' },
                ],
              },
              showCustomUi: true,
              strict: true,
            },
          },
        },
        // CRM: Neighborhood dropdown (Column E)
        {
          setDataValidation: {
            range: {
              sheetId: crmSheetId,
              startRowIndex: 1,
              startColumnIndex: 4,
              endColumnIndex: 5,
            },
            rule: {
              condition: {
                type: 'ONE_OF_LIST',
                values: neighborhoodNames.map((name) => ({ userEnteredValue: name })),
              },
              showCustomUi: true,
              strict: false,
            },
          },
        },
        // Bookings: Status dropdown (Column I)
        {
          setDataValidation: {
            range: {
              sheetId: sheetIds[1], // Bookings tab
              startRowIndex: 1,
              startColumnIndex: 8,
              endColumnIndex: 9,
            },
            rule: {
              condition: {
                type: 'ONE_OF_LIST',
                values: [
                  { userEnteredValue: 'Scheduled' },
                  { userEnteredValue: 'Confirmed' },
                  { userEnteredValue: 'Completed' },
                  { userEnteredValue: 'Cancelled' },
                  { userEnteredValue: 'No-show' },
                ],
              },
              showCustomUi: true,
              strict: true,
            },
          },
        },
        // Orders: Fulfillment Status dropdown (Column J)
        {
          setDataValidation: {
            range: {
              sheetId: sheetIds[2], // Orders tab
              startRowIndex: 1,
              startColumnIndex: 9,
              endColumnIndex: 10,
            },
            rule: {
              condition: {
                type: 'ONE_OF_LIST',
                values: [
                  { userEnteredValue: 'Pending' },
                  { userEnteredValue: 'Processing' },
                  { userEnteredValue: 'Shipped' },
                  { userEnteredValue: 'Delivered' },
                  { userEnteredValue: 'Pickup Scheduled' },
                  { userEnteredValue: 'Picked Up' },
                ],
              },
              showCustomUi: true,
              strict: true,
            },
          },
        },
      ],
    },
  });
  console.log('✅ Data validation added\n');

  // Step 7: Add conditional formatting
  console.log('🎨 Adding conditional formatting...');

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        // CRM: Highlight VIP customers in gold (Column F)
        {
          addConditionalFormatRule: {
            rule: {
              ranges: [
                {
                  sheetId: crmSheetId,
                  startRowIndex: 1,
                  startColumnIndex: 0,
                  endColumnIndex: 16,
                },
              ],
              booleanRule: {
                condition: {
                  type: 'TEXT_EQ',
                  values: [{ userEnteredValue: 'VIP' }],
                },
                format: {
                  backgroundColor: { red: 0.98, green: 0.91, blue: 0.71 }, // Light gold
                  textFormat: {
                    bold: true,
                  },
                },
              },
            },
            index: 0,
          },
        },
        // CRM: Highlight New Leads in blue (Column F)
        {
          addConditionalFormatRule: {
            rule: {
              ranges: [
                {
                  sheetId: crmSheetId,
                  startRowIndex: 1,
                  startColumnIndex: 0,
                  endColumnIndex: 16,
                },
              ],
              booleanRule: {
                condition: {
                  type: 'TEXT_EQ',
                  values: [{ userEnteredValue: 'New Lead' }],
                },
                format: {
                  backgroundColor: { red: 0.85, green: 0.92, blue: 0.99 }, // Light blue
                },
              },
            },
            index: 1,
          },
        },
        // Products: Low stock warning (Column J - Available < Reorder Point)
        {
          addConditionalFormatRule: {
            rule: {
              ranges: [
                {
                  sheetId: sheetIds[3], // Products tab
                  startRowIndex: 1,
                  startColumnIndex: 9,
                  endColumnIndex: 10,
                },
              ],
              booleanRule: {
                condition: {
                  type: 'CUSTOM_FORMULA',
                  values: [{ userEnteredValue: '=J2<K2' }],
                },
                format: {
                  backgroundColor: { red: 0.96, green: 0.8, blue: 0.8 }, // Light red
                  textFormat: {
                    bold: true,
                    foregroundColor: COLORS.red,
                  },
                },
              },
            },
            index: 0,
          },
        },
      ],
    },
  });
  console.log('✅ Conditional formatting added\n');

  // Step 8: Populate Analytics Dashboard with metrics
  console.log('📊 Setting up Analytics Dashboard...');

  const analyticsMetrics = [
    ['Total Customers', '=COUNTA(CRM!A2:A)', '=NOW()'],
    ['New Leads', '=COUNTIF(CRM!F:F,"New Lead")', '=NOW()'],
    ['Active Customers', '=COUNTIF(CRM!F:F,"Active Customer")', '=NOW()'],
    ['VIP Customers', '=COUNTIF(CRM!F:F,"VIP")', '=NOW()'],
    ['Total Orders (All-Time)', '=COUNTA(Orders!A2:A)', '=NOW()'],
    ['Total Revenue (All-Time)', '=SUM(Orders!H:H)', '=NOW()'],
    ['Total Sessions (All-Time)', '=COUNTA(Bookings!A2:A)', '=NOW()'],
    ['Sessions This Month', '=COUNTIFS(Bookings!D:D,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1),Bookings!I:I,"Completed")', '=NOW()'],
    ['Orders This Month', '=COUNTIFS(Orders!D:D,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))', '=NOW()'],
    ['Revenue This Month', '=SUMIFS(Orders!H:H,Orders!D:D,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))', '=NOW()'],
    ['Avg Order Value', '=AVERAGE(Orders!H:H)', '=NOW()'],
    ['Products Low Stock', '=COUNTIF(Products!J:J,"<"&Products!K:K)', '=NOW()'],
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Analytics Dashboard!A2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: analyticsMetrics,
    },
  });
  console.log('✅ Analytics Dashboard configured\n');

  // Step 9: Add instructional note in CRM tab
  const instructionNote = [
    ['INSTRUCTIONS: Customer ID auto-generates in Make.com. Formulas in columns L, M, N calculate automatically. Copy formulas down as you add customers.'],
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'CRM!A1000',
    valueInputOption: 'RAW',
    requestBody: {
      values: instructionNote,
    },
  });

  // Final: Auto-resize all columns
  console.log('📐 Auto-resizing columns...');
  const resizeRequests = sheetIds.map((sheetId) => ({
    autoResizeDimensions: {
      dimensions: {
        sheetId,
        dimension: 'COLUMNS',
        startIndex: 0,
        endIndex: 20,
      },
    },
  }));

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests: resizeRequests },
  });
  console.log('✅ Columns resized\n');

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎉 SUCCESS! Your Cincy Boxing operational hub is ready!\n');
  console.log(`📋 Spreadsheet ID: ${spreadsheetId}`);
  console.log(`🔗 Open in browser: https://docs.google.com/spreadsheets/d/${spreadsheetId}\n`);
  console.log('NEXT STEPS:');
  console.log('1. Open the spreadsheet and review all tabs');
  console.log('2. Share the spreadsheet with your Make.com service account');
  console.log('3. Set up Make.com scenarios to populate the sheets');
  console.log('4. Test with sample data to verify formulas work');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  return spreadsheetId;
}

// Run the script
createSpreadsheet()
  .then(() => {
    console.log('\n✨ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Error creating spreadsheet:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  });
