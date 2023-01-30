# Stack Alert JS Light Weight Library

Stack Alert is a custom alert library that provides an elegant and stylish way to show alerts in your web application. With its intuitive API, you can quickly create and customize various types of alerts with ease.

**Installation**

To install Stack Alert Library, you can use npm or include the library directly in your HTML file.

**npm**
<pre>
    npm install stack-alert-js
</pre>

**Direct include**
<pre>
  <script src="https://cdn.jsdelivr.net/npm/stack-alert-js@1.0.0/dist/stack-alert.min.js"></script>
</pre>

**Usage**
To use Stack Alert Library, you need to include the library in your HTML file and then use the stal() function to show alerts. You can pass various options to customize the appearance of the alert.

**Example**
The following code shows a basic example of using Stack Alert Library to show a warning alert:
<pre>
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
</pre>

**Options**
The following options are available in Stack Alert Library:
- **title**: The title of the alert.
- **text**: The text of the alert.
- **type**: The type of the alert. Can be error, warning, info or success.
- **showConfirmButton**: Whether to show the confirm button.
- **showCancelButton**: Whether to show the cancel button.
- **showOkButton**: Whether to show the ok button.

**Examples**
Here are some examples of using Stack Alert Library to show different types of alerts:

**Error alert**
<pre>
  stal({
    title: 'Error',
    text: 'An error has occurred',
    type: 'error',
    showOkButton: true
  });
</pre>

**Warning alert**
<pre>
  stal({
    title: 'Warning',
    text: 'Are you sure you want to proceed?',
    type: 'warning',
    showConfirmButton: true,
    showCancelButton: true,
  });
</pre>

**Info alert**
<pre>
  stal({
    title: 'Info',
    text: 'This is an informational message',
    type: 'info',
    showOkButton: true
  });
</pre>

**Success alert**
<pre>
  stal({
    title: 'Success',
    text: 'The operation was successful',
    type: 'success',
    showOkButton: true
  });
</pre>

**Conclusion**
Stack Alert is a lightweight, easy-to-use, and highly customizable js library that makes creating alerts in your web applications effortless. With its various customization options, you can create alerts that match the look and feel of your application, making it a great choice for both beginners and experienced developers.
