'use strict';
var express = require('express');
var session = require('express-session');

var app = express();

// Populates req.session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat'
}))

app.get('/', function (req, res) {
    var body = '';
    if (req.session.views) {
        ++req.session.views;
    } else {
        req.session.views = 1;
        body += '<p>First time visiting? view this page in several browsers</p>'
    }
    console.log(req.session)
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong></p>')

})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
