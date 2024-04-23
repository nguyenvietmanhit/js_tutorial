'use strict'

var express = require('express');
var logger = require('morgan');
var vhost = require('vhost');

//edit /etc/hosts

// 127.0.0.1       manhnvfoo.example.com
// 127.0.0.1       manhnvbar.example.com
// 127.0.0.1       manhnvexample.com


// Redirect app
var redirect = express();
redirect.use(function (req, res) {
    if (!module.parent) console.log(req.vhost);
    res.redirect('http://manhnvexample.com:3001/' + req.vhost[0])
})
// Main server app
var main = express();
if (!module.parent) main.use(logger('dev'));

main.get('/', (req, res) => {
    res.send('Hello from main app!')
})

main.get('/:sub', function (req, res) {
    res.send('Requested ' + req.params.sub);
})

// Vhost app
var app = module.exports = express();
app.use(vhost('*manhnvexample.com', redirect)) // Serves all subdomain via Redirect app
app.use(vhost('manhnvexample.com', main)); //Serves top level domain via Main server app

if (!module.parent) {
    app.listen(3001);
    console.log('Express started on port 3001')
}
