function main() {
  var range = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange();
  var values = range.getValues();
  var message = "Hi [name],\n\nPlease see the following messages:\n\n";
  try {
    if (values[1][0] != ""){
      // Gather messages as a string to insert into email
      for (i = 1; i < range.getNumRows(); i++){
        if (values[i][0] != ""){
          message = message + "From " + values[i][1] + ': "' + values[i][2] + '"\n\n';
        }
        else{
          continue;
        }
      }
      // Send email
      GmailApp.sendEmail("emailAddress", "Your Weekly Messages", message);
      // Delete rows with info to start anew next week
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().deleteRows(2, range.getNumRows() - 1 )
    }
  }
  catch(err) {
    return;
  }
}
