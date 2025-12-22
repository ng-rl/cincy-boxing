# Scripts

This directory contains utility scripts for setting up and managing Cincy Boxing infrastructure.

## Available Scripts

### `setup-google-sheets.ts`

**Purpose:** Automatically creates a fully-configured Google Sheets operational hub for Cincy Boxing.

**What it creates:**
- 7 tabs: CRM, Bookings, Orders, Products, Manual Lead Entry, Analytics Dashboard, Activity Log
- All 13 products pre-populated in Products tab
- Formulas for CRM calculations (Total Orders, Total Sessions, Total Spent)
- Analytics Dashboard with 12 key business metrics
- Data validation dropdowns for consistent data entry
- Conditional formatting (VIP highlighting, low stock warnings, etc.)
- Proper formatting, column sizing, and frozen headers

**How to use:**

1. **Prerequisites:**
   - Google Cloud project with Sheets API enabled
   - Service account created with JSON key downloaded
   - Environment variables configured (see `.env.example`)

2. **Run the script:**
   ```bash
   npm run setup-sheets
   ```

3. **Output:**
   ```
   🎉 SUCCESS! Your Cincy Boxing operational hub is ready!
   📋 Spreadsheet ID: 1a2b3c4d5e6f7g8h9i0j
   🔗 Open in browser: https://docs.google.com/spreadsheets/d/...
   ```

4. **Next steps:**
   - Share the spreadsheet with your Google account
   - Configure Make.com scenarios to populate data
   - Test with sample data

**Documentation:**
- See `/docs/GOOGLE_CLOUD_SETUP.md` for complete setup instructions
- See `/docs/GOOGLE_SHEETS_TEMPLATE.md` for sheet structure details

**Troubleshooting:**
- If you get authentication errors, check your `.env.local` file
- If the script completes but you can't see the sheet, you need to share it with your personal Google account
- Run with `DEBUG=* npm run setup-sheets` for verbose logging

## Running Scripts

All scripts in this directory can be run using npm scripts defined in `package.json`:

```bash
npm run setup-sheets   # Create Google Sheets operational hub
# More scripts will be added here as needed
```

Or run directly with tsx:

```bash
npx tsx scripts/setup-google-sheets.ts
```
