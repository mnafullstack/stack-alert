Stack Alert
Stack Alert is a lightweight and customizable JavaScript library for creating beautiful, responsive and customizable alert messages.

Getting started
To start using Stack Alert in your project, include the Stack Alert JavaScript file in your HTML file:

php
Copy code
<script src="stack-alert.js"></script>
Usage
You can create an alert message with the following code:

php
Copy code
$('button').click(function() {
  stal({
    title: 'This is a warning',
    text: 'Are you sure you want to proceed?',
    type: 'warning',
    showConfirmButton: true,
    showCancelButton: true,
  }).then(function(result) {
    if (result) {
      stal({
        title: 'Success',
        text: 'Your action was successful',
        type: 'success',
        showOkButton: true
      });
    } else {
      stal({
        title: 'Error',
        text: 'Your action was cancelled',
        type: 'error',
        showOkButton: true
      });
    }
  });
});
Examples
Here are a few examples of alerts you can create with Stack Alert:

Warning:
php
Copy code
stal({
  title: 'This is a warning',
  text: 'Are you sure you want to proceed?',
  type: 'warning',
  showConfirmButton: true,
  showCancelButton: true,
});
Success:
php
Copy code
stal({
  title: 'Success',
  text: 'Your action was successful',
  type: 'success',
  showOkButton: true
});
Error:
php
Copy code
stal({
  title: 'Error',
  text: 'Your action was cancelled',
  type: 'error',
  showOkButton: true
});
Options
You can customize the appearance of your alert messages by using the following options:

title: The title of the alert message
text: The text of the alert message
type: The type of the alert message (warning, success, error)
showConfirmButton: Whether to show the confirm button
showCancelButton: Whether to show the cancel button
showOkButton: Whether to show the OK button
For more information on how to use Stack Alert, please refer to the complete documentation.
