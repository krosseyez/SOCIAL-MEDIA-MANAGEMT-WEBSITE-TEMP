# Social Media Agency Website Template

This is a modern, fully generic website template for a social media agency or creative business. All branding, images, and sensitive information have been removed, making it ready for public use or GitHub sharing.

## Features
- **Clean, modern design** with a white and red color palette
- **Responsive** and mobile-friendly
- **All images are placeholders** (no real or sensitive images in the repo)
- **No personal or sensitive information** in any file
- **Masterclass page** is fully integrated and uses the same navigation as the main site
- **Easy to customize**: just replace placeholder images and text with your own

## How to Use
1. Clone or download this repository.
2. Replace the placeholder images (from `https://via.placeholder.com/`) with your own images if desired.
3. Update the text and links to fit your brand.
4. (Optional) If you want to connect the masterclass registration form to Google Sheets, see below.

## Connecting the Masterclass Form to Google Sheets
The masterclass registration form is set up as a front-end template only. If you want to collect real submissions, you can connect it to a Google Sheet using Google Apps Script:

1. Open `MEDAIMASTERCLASS/Assets/GS/code.gs` for full instructions and a sample script.
2. Create a new Google Sheet and open Extensions > Apps Script.
3. Copy the sample code from `code.gs` into your Apps Script project.
4. Deploy the script as a web app (see the instructions in the file).
5. Copy your web app URL and update the `scriptURL` in `MEDAIMASTERCLASS/Assets/js/index.js` (uncomment and use your URL).
6. The form will now submit data to your Google Sheet.

## No Sensitive Files
- All previous images and sensitive files have been removed.
- There are no personal or private details in this template.

 ## Image Warning ⚠️
Important: All images must be placed in the Assets/images/ directory (or your designated assets folder).
Placeholder images (https://via.placeholder.com/) are used by default. To customize the site, replace these with your own images in the appropriate folder and update the file paths accordingly in the HTML/CSS files.

## Ready to Go
You can now safely share or deploy this template anywhere!

---

If you have any questions or need further customization, feel free to ask. 

MAY GOD BE WITH YOU
