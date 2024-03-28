'use strict'

var express = require('express');
var logger = require('morgan');
var path = require('path');
var session = require('express-session');
var methodOverride = require('method-override');

var app = module.exports = express();

// Set our default template engine to "ejs" which prevent the need for using file extensions
app.set('view engine', 'ejs');

// Set views for error and 404 pages
app.set('views', path.join(__dirname, 'views'));

// Define a custom res.message() method which stores messages in the session
app.response.message = function (msg) {
    // Reference `req.session` via the `this.req` reference
    var sess = this.req.session;
    // Simply add the msg to an array for later
    sess.messages = sess.messages || [];
    sess.messages.push(msg);
    return this;
}

// Log
if (!module.parent) app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Session support
app.use(session({
    resave: false, //dont save session if unmodified
    saveUninitialized: false, //dont create session until something stored
    secret: 'some secret hrere'
}));

// Parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }));

// Allow overridng methods in query (?_method=put)
app.use(methodOverride('_method'))

// Expose the "messages" local variable when views are rendered
app.use(function(req, res, next) {
    var msgs = req.session.messages || [];

    // Expose "messages" local variable
    res.locals.messages = msgs;

    // Expose "hashMessages
    res.locals.hasMessages = !! msgs.length;
    // This is equivalent:
    // res.locals({
    //     messages: msgs,
    //     hasMessages: !! msgs.length
    // })
    next();
    // Empty or "flush" the messages so they dont build up
    req.session.messages = [];
});

// Load controllers
require('./lib/boot')(app, {verbose: !module.parent});

app.use(function(err, req, res, next) {
    // Log it
    if (!module.parent) {
        console.error(err.stack);
    }
    // Error page
    res.status(500).render('5xx');
})

// Assume 404 since no middleware responded
app.use(function (req, res, next) {
    res.status(400).render('404', { url: req.originalUrl});
})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
