# Google Cloud Setup for Cincy Boxing

This guide walks you through setting up Google Cloud to auto-generate your operational Google Sheet.

## Overview

The `npm run setup-sheets` script will automatically create a fully-configured Google Sheet with:
- ✅ All 7 tabs (CRM, Bookings, Orders, Products, Manual Lead Entry, Analytics Dashboard, Activity Log)
- ✅ All 13 products pre-populated in Products tab
- ✅ Formulas for CRM calculations and Analytics Dashboard
- ✅ Data validation dropdowns for consistent data entry
- ✅ Conditional formatting (VIP highlights, low stock warnings, etc.)
- ✅ Proper column sizing and frozen headers

## Step-by-Step Setup

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **Select a Project** → **New Project**
3. Enter project name: `cincy-boxing` (or any name you prefer)
4. Click **Create**

### 2. Enable Google Sheets API

1. In your project dashboard, go to **APIs & Services** → **Library**
2. Search for "Google Sheets API"
3. Click **Google Sheets API**
4. Click **Enable**

### 3. Create Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **+ Create Credentials** → **Service Account**
3. Fill in details:
   - **Service account name**: `cincy-boxing-sheets`
   - **Service account ID**: (auto-generated)
   - **Description**: "Service account for Cincy Boxing operational spreadsheet"
4. Click **Create and Continue**
5. Skip the optional steps (no roles needed for creating sheets)
6. Click **Done**

### 4. Generate Service Account Key

1. On the **Credentials** page, find your new service account
2. Click on the service account email (e.g., `cincy-boxing-sheets@...`)
3. Go to the **Keys** tab
4. Click **Add Key** → **Create New Key**
5. Select **JSON** format
6. Click **Create**
7. A JSON file will download - **SAVE THIS SECURELY!**

### 5. Extract Credentials from JSON

Open the downloaded JSON file. You'll need two values:

```json
{
  "type": "service_account",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "cincy-boxing-sheets@your-project.iam.gserviceaccount.com",
  "client_id": "...",
  ...
}
```

You need:
- **`client_email`**: The service account email
- **`private_key`**: The entire private key (including BEGIN and END lines)

### 6. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=cincy-boxing-sheets@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"

# Make.com Webhooks
MAKE_CONTACT_FORM_WEBHOOK_URL=https://hook.us1.make.com/your-webhook-id-here

# Stripe (for future use)
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
# STRIPE_SECRET_KEY=sk_test_...
```

**IMPORTANT NOTES:**
- Keep the private key in **double quotes**
- The `\n` characters should remain as literal `\n` (they'll be converted by the script)
- **NEVER commit `.env.local` to git** (it's already in `.gitignore`)

### 7. Run the Setup Script

```bash
npm run setup-sheets
```

You should see output like:

```
🚀 Creating Cincy Boxing operational spreadsheet...

✅ Spreadsheet created: 1a2b3c4d5e6f7g8h9i0j
🔗 URL: https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j

📝 Adding headers to all sheets...
✅ Headers formatted

📦 Populating Products tab with inventory...
✅ Added 13 products

🧮 Adding formulas to CRM tab...
✅ CRM formulas added

📋 Adding data validation dropdowns...
✅ Data validation added

🎨 Adding conditional formatting...
✅ Conditional formatting added

📊 Setting up Analytics Dashboard...
✅ Analytics Dashboard configured

📐 Auto-resizing columns...
✅ Columns resized

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎉 SUCCESS! Your Cincy Boxing operational hub is ready!

📋 Spreadsheet ID: 1a2b3c4d5e6f7g8h9i0j
🔗 Open in browser: https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 8. Share Sheet with Your Account

The script creates the sheet under the service account, so you need to share it with yourself:

**Option A: Share via URL (Easiest)**
1. Copy the spreadsheet URL from the script output
2. Open it in your browser
3. Click **Share** button
4. Add your personal Google account email
5. Set permission to **Editor**
6. Click **Send**

**Option B: Make Public (Not Recommended for Sensitive Data)**
1. Open the spreadsheet
2. Click **Share** → **Change to anyone with the link**
3. Set to **Editor**

### 9. Save Spreadsheet ID for Make.com

The script outputs a spreadsheet ID like: `1a2b3c4d5e6f7g8h9i0j`

You'll need this ID when setting up Make.com scenarios:
- In Make.com Google Sheets modules, you'll paste this ID
- Or use the full URL

## Testing Your Setup

### Test 1: Verify Formulas

1. Open the **CRM** tab
2. Add a test customer in row 2:
   ```
   CUST-001 | John Doe | john@example.com | 513-555-0100 | Downtown Cincinnati | New Lead | Prospect | Website Contact Form | 1/1/2025
   ```
3. Check that columns L, M, N (Total Orders, Total Sessions, Total Spent) show `0`

### Test 2: Verify Products

1. Open the **Products** tab
2. Verify all 13 products are listed
3. Check that column J (Available) = column H (In Stock) - column I (Reserved)
4. Change "Reserved" for a product to `5` and verify "Available" updates

### Test 3: Verify Analytics Dashboard

1. Open the **Analytics Dashboard** tab
2. All metrics should show `0` for empty data
3. Add test data to CRM, Orders, or Bookings
4. Verify metrics update automatically

### Test 4: Verify Dropdowns

1. Click a cell in CRM > Lead Status (column F)
2. You should see dropdown with: New Lead, Contacted, Qualified, etc.
3. Test other dropdowns in CRM, Bookings, and Orders tabs

## Troubleshooting

### Error: "Request had insufficient authentication scopes"

**Solution:** Make sure you enabled the Google Sheets API (Step 2)

### Error: "The caller does not have permission"

**Solution:** Check that your private key is correctly formatted in `.env.local` with `\n` preserved

### Error: "Cannot find module 'googleapis'"

**Solution:** Run `npm install --legacy-peer-deps`

### Script runs but can't see the sheet

**Solution:** The sheet is created under the service account. Follow Step 8 to share it with your personal Google account.

### Formulas show as text instead of calculating

**Solution:** Make sure you used `valueInputOption: 'USER_ENTERED'` in the script. The script already does this, so if you're seeing this, there may be a Google Sheets sync issue. Try refreshing the page.

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`, but double-check
2. **Restrict service account access** - Only share with accounts that need access
3. **Rotate keys periodically** - Delete old keys in Google Cloud Console
4. **Use environment-specific keys** - Different keys for development/production
5. **Monitor usage** - Check Google Cloud Console for unexpected API calls

## Next Steps

Once your sheet is set up:

1. ✅ **Set up Make.com scenarios** - See `/docs/MAKE_COM_SCENARIOS.md`
2. ✅ **Configure Cal.com webhook** - Connect bookings to Bookings tab
3. ✅ **Configure Stripe webhook** - Connect orders to Orders + Inventory
4. ✅ **Test the full workflow** - Submit test form → Check CRM tab

## Updating the Sheet

If you need to recreate the sheet (e.g., to add new features):

1. Run `npm run setup-sheets` again
2. A new spreadsheet will be created with a new ID
3. Update Make.com scenarios with the new spreadsheet ID
4. Archive or delete the old sheet

## Support

For issues with:
- **Google Cloud setup**: Check Google Cloud documentation
- **Script errors**: Check the error message and this troubleshooting guide
- **Make.com integration**: See `/docs/MAKE_COM_SCENARIOS.md`
