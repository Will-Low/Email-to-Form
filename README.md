# weekly_email_from_form_submissions

A quick Google Apps script that gathers messages submitted by a Google Form and emails the past week's messages to a specified email.

<b>Form/Sheet Structure</b>
<br>
The Google Form, as is, should contain 2 questions similar to this:
<ol>
  <li>What is your full name?</li>
  <li>What is your message?</li>
</ol>

This will correspond to a Google Spreadsheet with a datetime column in column A, followed by these two questions. Make sure the columns in the Spreadsheet that houses the responses are in this order.
