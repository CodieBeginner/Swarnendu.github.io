const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., your HTML file)
app.use(express.static('PortWebsite')); // Replace 'PortWebsite' with your folder name

// Handle form submission
app.post('/submit', (req, res) => {
  // Access form data
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  try {
    // Process the form data (e.g., send an email, save to a database, etc.)
    // You can add your code here

    // For this example, we'll just send a simple response
    res.send(`Form submitted successfully!<br>Name: ${name}<br>Email: ${email}<br>Message: ${message}`);
  } catch (error) {
    console.error('Error processing form:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
