const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.join(__dirname, 'public');

// Use the express static middleware to serve the static files
app.use(express.static(publicPath))

app.listen(5000);
