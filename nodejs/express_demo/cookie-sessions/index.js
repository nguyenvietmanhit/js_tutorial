'use strict';

var cookieSession = require('cookie-session');
var express = require('express');
var app = module.exports = express();

// Add req.session cookie support
app.use(cookieSession({secret: 'many is cool'}));

// Do something with the session
app.get('/', function(req, res) {
    req.session.count = (req.session.count || 0) + 1;
    res.send('viewed ' + req.session.count + ' times\n');
})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
