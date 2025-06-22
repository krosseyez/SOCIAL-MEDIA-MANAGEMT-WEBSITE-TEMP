/*
This is a sample Google Apps Script to connect your HTML form to a Google Sheet.
To use this, you'll need to create your own Google Sheet and Apps Script project.

Instructions:
1.  Create a new Google Sheet.
2.  In your Sheet, go to Extensions > Apps Script.
3.  Copy and paste the code below into the script editor, replacing the existing content.
4.  Update the 'sheetName' variable to the name of the sheet you want to write data to.
5.  Save the script.
6.  Click "Deploy" > "New deployment".
7.  For "Select type", choose "Web app".
8.  In the "Deployment configuration" settings:
    -   Give it a description.
    -   Execute as: "Me"
    -   Who has access: "Anyone" (or "Anyone with a Google account" if you want to restrict access).
9.  Click "Deploy".
10. Authorize the script when prompted.
11. Copy the "Web app URL" provided.
12. In your `MEDAIMASTERCLASS/Assets/js/index.js` file, uncomment the `scriptURL` constant and paste this URL. You will also need to re-enable the fetch call.
*/

/*
const sheetName = 'YourSheetName'; // Change this to your sheet's name
const scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
*/
