# CINCY BOXING HUB - GOOGLE SHEETS TEMPLATE
# Complete operational backbone for training + e-commerce business

## ⚡ RECOMMENDED: AUTO-GENERATE YOUR SHEET

**Instead of manually creating this sheet, you can auto-generate it with one command:**

```bash
npm run setup-sheets
```

This script will automatically create a fully-configured Google Sheet with:
- ✅ All 7 tabs with proper headers
- ✅ All 13 products pre-populated
- ✅ All formulas configured
- ✅ Data validation dropdowns
- ✅ Conditional formatting
- ✅ Analytics Dashboard with 12 metrics

**See `/docs/GOOGLE_CLOUD_SETUP.md` for complete setup instructions.**

---

## MANUAL SETUP INSTRUCTIONS

If you prefer to create the sheet manually, follow these steps:

1. Create new Google Sheet named "Cincy Boxing Hub"
2. Create 7 tabs (sheets) with exact names below
3. Copy column headers from each section
4. Apply formulas as documented
5. Set up data validation and conditional formatting as noted

---

## TAB 1: CRM
## Master customer/lead database - everyone lives here

### Column Headers (Row 1):
Contact ID | Created Date | Source | Lead Status | Name | Email | Phone | Address | Neighborhood | First Contact Date | Last Contact Date | Last Activity | Next Follow-up | Customer Type | Total Orders | Total Sessions | Total Spent | Tags | Notes | Owner | Cal.com Event ID | Stripe Customer ID

### Data Validation:
- Source: Dropdown (Website Form, Cal.com Booking, Stripe Order, Manual Entry, Referral, Social Media, Walk-in)
- Lead Status: Dropdown (New Lead, Contacted, Qualified, Booked Session, Active Customer, Lapsed, VIP, Churned)
- Customer Type: Dropdown (Prospect, Training Client, E-commerce Customer, Both)
- Neighborhood: Dropdown (All 16 neighborhoods from your site)

### Formulas:
- Contact ID (Column A): Auto-increment
  Row 2: =TEXT(ROW()-1,"0000")
  (Drag down)

- Total Orders (Column O):
  Row 2: =COUNTIF(Orders!B:B,A2)
  (Counts orders where CRM Contact ID matches)

- Total Sessions (Column P):
  Row 2: =COUNTIF(Bookings!B:B,A2)
  (Counts bookings where CRM Contact ID matches)

- Total Spent (Column Q):
  Row 2: =SUMIF(Orders!B:B,A2,Orders!H:H)
  (Sums order totals where CRM Contact ID matches)

### Conditional Formatting:
- Lead Status = "VIP" → Row background: Gold (#FFF3CD)
- Lead Status = "New Lead" → Row background: Light Blue (#D1E7FF)
- Lead Status = "Lapsed" → Row background: Light Red (#FFE0E0)
- Next Follow-up <= TODAY() → Bold red text in Follow-up column

### Sample Data (Row 2):
0001 | 2024-01-15 | Website Form | New Lead | John Smith | john@email.com | 513-555-0001 | | Hyde Park | 2024-01-15 | 2024-01-15 | Submitted contact form | 2024-01-16 | Prospect | 0 | 0 | 0 | newsletter | Interested in beginner training | You | |

---

## TAB 2: Bookings
## Training session bookings linked to CRM

### Column Headers (Row 1):
Booking ID | CRM Contact ID | Booking Date | Client Name | Client Email | Phone | Session Type | Session Date | Session Time | Location/Neighborhood | Status | Paid | Amount | Payment Method | Notes | Cal.com Event ID | Confirmation Sent

### Data Validation:
- Session Type: Dropdown (Private 1-on-1, Small Group 2-4, Boxing Fitness Class, Technique & Pad Work, Free Intro Session)
- Location/Neighborhood: Dropdown (All 16 neighborhoods + "Virtual" + "Client Location")
- Status: Dropdown (Scheduled, Confirmed, Completed, No-Show, Cancelled, Rescheduled)
- Paid: Dropdown (Yes, No, Partial, Refunded)
- Payment Method: Dropdown (Cash, Card, Stripe, Venmo, Free)

### Formulas:
- Booking ID (Column A):
  Row 2: ="BK-"&TEXT(ROW()-1,"0000")

- Client Name (Column D): Auto-lookup from CRM
  Row 2: =IFERROR(VLOOKUP(B2,CRM!A:E,4,FALSE),"")

- Client Email (Column E): Auto-lookup from CRM
  Row 2: =IFERROR(VLOOKUP(B2,CRM!A:F,5,FALSE),"")

### Conditional Formatting:
- Status = "Completed" → Row background: Light Green (#D4EDDA)
- Status = "No-Show" → Row background: Light Red (#FFE0E0)
- Status = "Scheduled" AND Session Date = TODAY() → Row background: Yellow (#FFF3CD)
- Paid = "No" AND Status = "Completed" → Bold red text

### Sample Data (Row 2):
BK-0001 | 0001 | 2024-01-15 | =VLOOKUP formula | =VLOOKUP formula | 513-555-0001 | Private 1-on-1 | 2024-01-18 | 10:00 AM | Hyde Park | Scheduled | Yes | 75 | Stripe | First session | cal_abc123 | Yes

---

## TAB 3: Orders
## E-commerce orders linked to CRM

### Column Headers (Row 1):
Order ID | CRM Contact ID | Order Date | Customer Name | Customer Email | Phone | Items | Quantity | Subtotal | Shipping Method | Shipping Cost | Total | Payment Status | Fulfillment Status | Tracking Number | Shipped Date | Stripe Order ID | Notes

### Data Validation:
- Shipping Method: Dropdown (Standard Shipping, Local Pickup/Delivery, Free Shipping)
- Payment Status: Dropdown (Paid, Pending, Failed, Refunded)
- Fulfillment Status: Dropdown (Pending, Processing, Shipped, Delivered, Pickup Ready, Completed, Cancelled)

### Formulas:
- Order ID (Column A):
  Row 2: ="ORD-"&TEXT(ROW()-1,"0000")

- Customer Name (Column D): Auto-lookup
  Row 2: =IFERROR(VLOOKUP(B2,CRM!A:E,4,FALSE),"")

- Customer Email (Column E): Auto-lookup
  Row 2: =IFERROR(VLOOKUP(B2,CRM!A:F,5,FALSE),"")

- Total (Column L):
  Row 2: =I2+K2
  (Subtotal + Shipping Cost)

### Conditional Formatting:
- Fulfillment Status = "Pending" AND Order Date < TODAY()-2 → Row background: Yellow
- Fulfillment Status = "Shipped" → Row background: Light Blue
- Payment Status = "Failed" OR "Pending" → Bold red text

### Sample Data (Row 2):
ORD-0001 | 0001 | 2024-01-15 | =VLOOKUP formula | =VLOOKUP formula | 513-555-0001 | Beginner Boxing Starter Kit | 1 | 99.99 | Standard Shipping | 15.00 | 114.99 | Paid | Pending | | | ch_abc123 | Black/Red gloves selected

---

## TAB 4: Products
## Inventory management

### Column Headers (Row 1):
SKU | Product ID | Product Name | Category | Sub-Category | Price | Sale Price | In Stock | Reserved | Available | Low Stock Alert | Weight (oz) | Ship Category | Track Inventory | Featured | Last Restocked | Notes

### Data Validation:
- Category: Dropdown (bundles, gloves, equipment, bags, protection, apparel, digital)
- Ship Category: Dropdown (small, medium, large, digital)
- Track Inventory: Dropdown (Yes, No)
- Featured: Dropdown (Yes, No)

### Formulas:
- Available (Column J):
  Row 2: =H2-I2
  (In Stock - Reserved)

- Available column: Conditional formula for digital products
  Row 2: =IF(N2="No","∞",H2-I2)
  (Show infinity symbol for digital products)

### Conditional Formatting:
- Available <= Low Stock Alert → Row background: Red (#FFE0E0), Bold text
- Available > Low Stock Alert → Row background: Green (#D4EDDA)
- Track Inventory = "No" → Gray out inventory columns

### Pre-populated Products (Rows 2-14):

BBK-001 | beginner-boxing-kit | Beginner Boxing Starter Kit | bundles | Beginner Kits | 129.99 | 99.99 | 25 | 0 | 25 | 5 | 80 | large | Yes | Yes | 2024-01-15 | Includes gloves, wraps, rope, program

HBCK-001 | heavy-bag-complete-kit | Heavy Bag Complete Home Gym Kit | bundles | Home Gym Kits | 299.99 | 249.99 | 15 | 0 | 15 | 3 | 120 | large | Yes | Yes | 2024-01-15 | Complete bag setup

BCTK-001 | conditioning-kit | Boxing Conditioning Training Kit | bundles | Conditioning Kits | 89.99 | 69.99 | 30 | 0 | 30 | 5 | 24 | medium | Yes | Yes | 2024-01-15 | Portable training kit

CPG-001 | cincy-pro-training-gloves | Cincy Boxing Pro Training Gloves | gloves | Training Gloves | 79.99 | | 50 | 0 | 50 | 10 | 16 | medium | Yes | Yes | 2024-01-15 | Signature gloves

BTG-001 | starter-training-gloves | Beginner Training Gloves | gloves | Training Gloves | 49.99 | | 40 | 0 | 40 | 10 | 14 | medium | Yes | No | 2024-01-15 | Entry-level

PFM-001 | pro-focus-mitts | Professional Focus Mitts (Curved) | equipment | Punch Mitts & Pads | 64.99 | | 20 | 0 | 20 | 5 | 12 | medium | Yes | No | 2024-01-15 | Sold as pair

SJR-001 | speed-jump-rope | Professional Speed Jump Rope | equipment | Conditioning & Strength | 24.99 | | 60 | 0 | 60 | 15 | 4 | small | Yes | No | 2024-01-15 | Adjustable length

HB-100 | heavy-bag-100lb | Heavy Bag - 100 Pound | bags | Heavy Bags | 149.99 | | 12 | 0 | 12 | 3 | 100 | large | Yes | Yes | 2024-01-15 | Includes chain

MSW-180 | mexican-style-wraps | Mexican Style Hand Wraps (180") | protection | Hand Wraps | 12.99 | 9.99 | 100 | 0 | 100 | 20 | 2 | small | Yes | Yes | 2024-01-15 | Sold in pairs

CBT-001 | cincy-boxing-tshirt | Cincy Boxing Training T-Shirt | apparel | Training Apparel | 29.99 | | 50 | 0 | 50 | 10 | 6 | small | Yes | No | 2024-01-15 | Performance fabric

CBH-001 | cincy-boxing-hoodie | Cincy Boxing Hoodie | apparel | Lifestyle Apparel | 54.99 | | 30 | 0 | 30 | 8 | 16 | medium | Yes | No | 2024-01-15 | Embroidered logo

DIG-4WK | beginner-4week-program | 4-Week Beginner Boxing Program | digital | Beginner Programs | 39.99 | | ∞ | 0 | ∞ | 0 | 0 | digital | No | No | 2024-01-15 | Digital download

DIG-HBM | heavy-bag-mastery | Heavy Bag Mastery Program | digital | Bag Work Programs | 49.99 | | ∞ | 0 | ∞ | 0 | 0 | digital | No | No | 2024-01-15 | Digital download

---

## TAB 5: Manual Lead Entry
## Simple input form for manual lead creation

### Column Headers (Row 1):
Entry Date | Name | Email | Phone | Neighborhood | Interest | Source | Notes | Processed

### Data Validation:
- Neighborhood: Dropdown (All 16 neighborhoods)
- Interest: Text (can be comma-separated: "Training, Gear, Questions")
- Source: Dropdown (Referral, Walk-in, Event, Social Media, Other)
- Processed: Dropdown (No, Yes)

### Instructions:
- Fill out this tab when you manually meet/talk to someone
- Make.com watches for new rows where Processed = "No"
- Automation copies to CRM tab and marks Processed = "Yes"

### Sample Data (Row 2):
2024-01-15 | Sarah Johnson | sarah@email.com | 513-555-0002 | OTR | Training, Gear | Referral from Mike | Friend of existing client | No

---

## TAB 6: Analytics Dashboard
## Auto-calculated business metrics

### Layout (Key metrics with formulas):

| Metric | This Week | This Month | All Time |
|--------|-----------|------------|----------|
| Total Contacts | =COUNTIF(CRM!K:K,">="&TODAY()-7) | =COUNTIF(CRM!K:K,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1)) | =COUNTA(CRM!A:A)-1 |
| New Leads | =COUNTIFS(CRM!D:D,"New Lead",CRM!B:B,">="&TODAY()-7) | =COUNTIFS(CRM!D:D,"New Lead",CRM!B:B,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1)) | =COUNTIF(CRM!D:D,"New Lead") |
| Active Customers | N/A | N/A | =COUNTIF(CRM!D:D,"Active Customer") |
| VIP Customers | N/A | N/A | =COUNTIF(CRM!D:D,"VIP") |
| Total Revenue | =SUMIFS(Orders!L:L,Orders!C:C,">="&TODAY()-7) | =SUMIFS(Orders!L:L,Orders!C:C,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1)) | =SUM(Orders!L:L) |
| Orders Placed | =COUNTIF(Orders!C:C,">="&TODAY()-7) | =COUNTIF(Orders!C:C,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1)) | =COUNTA(Orders!A:A)-1 |
| Sessions Booked | =COUNTIF(Bookings!C:C,">="&TODAY()-7) | =COUNTIF(Bookings!C:C,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1)) | =COUNTA(Bookings!A:A)-1 |
| Sessions Revenue | =SUMIFS(Bookings!M:M,Bookings!C:C,">="&TODAY()-7) | =SUMIFS(Bookings!M:M,Bookings!C:C,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1)) | =SUM(Bookings!M:M) |
| Avg Order Value | =IF(B6=0,0,B5/B6) | =IF(C6=0,0,C5/C6) | =IF(D6=0,0,D5/D6) |
| Conversion Rate | N/A | =IF(C2=0,0,C3/C2) | =IF(D2=0,0,D3/D2) |

### Additional Sections:

**Top Products (This Month)**
| Product Name | Units Sold | Revenue |
Use QUERY or pivot table on Orders tab

**Top Neighborhoods (This Month)**
| Neighborhood | Sessions | Orders | Total Revenue |
Use QUERY combining Bookings and Orders

**Customer Breakdown**
| Customer Type | Count | % of Total |
| Prospect | =COUNTIF(CRM!N:N,"Prospect") | =B/Total*100 |
| Training Client | =COUNTIF(CRM!N:N,"Training Client") | =B/Total*100 |
| E-commerce Customer | =COUNTIF(CRM!N:N,"E-commerce Customer") | =B/Total*100 |
| Both | =COUNTIF(CRM!N:N,"Both") | =B/Total*100 |

---

## TAB 7: Activity Log
## Audit trail of all customer interactions

### Column Headers (Row 1):
Timestamp | Contact ID | Contact Name | Activity Type | Activity Details | Source System | Automated | Updated By

### Data Validation:
- Activity Type: Dropdown (Form Submission, Booking Created, Order Placed, Email Sent, Status Changed, Note Added, Session Completed, Payment Received)
- Source System: Dropdown (Website, Cal.com, Stripe, Make.com, Manual, ShipStation)
- Automated: Dropdown (Yes, No)

### Usage:
- Make.com appends rows whenever any activity happens
- Provides complete audit trail
- Can filter by Contact ID to see full history

### Sample Data (Row 2):
2024-01-15 10:30:00 | 0001 | John Smith | Form Submission | Submitted contact form - interested in training | Website | Yes | Make.com

---

## ADDITIONAL SETUP

### Named Ranges (for easier formulas):
- CRM_ContactID = CRM!A:A
- CRM_Email = CRM!F:F
- CRM_Status = CRM!D:D
- Products_SKU = Products!A:A
- Products_Available = Products!J:J

### Data Validation Lists:
Create a hidden "Settings" tab with:
- List of all 16 neighborhoods
- List of session types
- List of product categories
- Status options
- Tag library

Then reference these lists in data validation dropdowns.

### Sharing Settings:
- Main sheet: Your email (Owner)
- Share with Make.com service account (Editor)
- Optional: VA or assistant (Editor or Viewer)

### Backup:
- Set up automated daily backup via Google Takeout or Apps Script
- Consider weekly manual export to CSV

---

## MAKE.COM INTEGRATION NOTES

### Google Sheets Permissions:
1. In Make.com, add Google Sheets module
2. Authorize with your Google account
3. Select "Cincy Boxing Hub" spreadsheet
4. Grant edit access

### Common Operations:
- Add Row: When new lead/order/booking
- Update Row: When status changes
- Search Rows: To find existing contact by email
- Get Cell: To check inventory levels

### Webhook URLs to Set:
- Contact Form: https://hook.us1.make.com/[your-webhook-id]
- Cal.com: Configure in Cal.com settings
- Stripe: Configure in Stripe dashboard webhooks

---

## QUICK START CHECKLIST

□ Create Google Sheet "Cincy Boxing Hub"
□ Create 7 tabs with exact names
□ Copy column headers for each tab
□ Add formulas to CRM (Total Orders, Sessions, Spent)
□ Add formulas to Bookings (Name, Email lookups)
□ Add formulas to Orders (Name, Email, Total)
□ Add formulas to Products (Available calculation)
□ Input 13 products to Products tab
□ Set up Analytics Dashboard formulas
□ Configure data validation dropdowns
□ Apply conditional formatting rules
□ Test formulas with sample data
□ Share with Make.com
□ Build Make.com scenarios
□ Test end-to-end flow

---

## SUPPORT FORMULAS

### CRM Tab - Automatically set Lead Status based on activity:
Add helper column "Auto Status Suggestion":
=IF(P2>0,IF(O2>0,"Both (VIP potential)","Training Client"),IF(O2>0,"E-commerce Customer","Prospect"))

### Products Tab - Days Since Last Restock:
=IF(P2="","",(TODAY()-P2))

### Low Stock Alert Email:
Use conditional formatting + Apps Script or Make.com to email when Available <= Alert threshold

---

This template provides complete operational visibility and automation foundation for your business.
