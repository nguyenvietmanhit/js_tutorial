'use strict';

var express = require('express');
var logger = require('morgan');
var session = require('express-session');

// Pass the express to the connect redis module allowing it to inherit from session.Store
var RedisStore = require('connect-redis')(session);

var app = express();
app.use(logger('dev'));

// Populates req.session
app.use(session({
    resave: false, //dont save session if unmodified
    saveUninitialized: false,
    secret: 'keyboard cat',
    store: new RedisStore
}))

app.get('/', function (req, res) {
    var body = '';
    if (req.session.views) {
        ++req.session.views
    } else {
        req.session.views = 1;
        body += '<p>First time visiting? view this page in several browsers :)</p>'
    }
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times</p>')
})

app.listen(3000);
console.log('Express app started on port 3000');
