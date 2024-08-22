const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('layouts/mainLayout', { title: 'Aenzbi Boutique POS' });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
