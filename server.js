// Load depenencies/ modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const cars = require('./cars');
require('dotenv').config();

// Invoke express into app
const app = express();

// Set the view engine
app.set('view engine', 'ejs');

// Render static files through express
app.use(express.static(path.join(__dirname, 'public')));

// Home page end-point
app.get('/', (req, res) => {
  res.render('pages/index', 
    {
      title: 'Home',
      current: 'index-page',
      tagline: 'JDM imported cars'
    });
});

// Gallery page end-point
app.get('/gallery', (req, res) => {
  res.render('pages/gallery', 
    {
      title: 'Gallery',
      current: 'gallery-page',
      tagline: 'Take a look at our garage!'
    });
});

// Subscribe page end-point
app.get('/subscribe', (req, res) => {
  res.render('pages/subscribe', 
    {
      title: 'Subscribe',
      current: 'subscribe-page',
      tagline: 'Interested? Subscribe to get the latest news!!'
    });
});


// Json get endpoint for gallery
app.get('/api/v0/gallery', function(request, response){
  response.json(cars);
});

// Return 404 error when page is not found
app.use((req, res) => {
  res.status(404).send('404 Error: Page not found');
});


// Set PORT variable with a fallback of PORT 3000
const PORT = process.env.PORT || 3000;

// Listening on PORT (start server)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});