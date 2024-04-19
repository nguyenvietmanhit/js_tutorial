'use strict';

// Install redis first:
// npm install redis online
var express = require('express');
var online = require('online');
var redis = require('redis');
var db = redis.createClient();

online = online(db);

var app = express();

// Activity tracking, in this case using the UA string, you would use req.user.id etc
app.use(function(req, res, next) {
    online.add(req.headers['user-agent']);
    next();
})

// List Helper
function list(ids) {
    return '<ul>' + ids.map(function (id) {
        return '<li>' + id + '</li>';
    }).join('') + '</ul>';
}

// Get users online
app.get('/', function (req, res, next) {
    online.last(5, function(err, ids) {
        if (err) return next(err);
        res.send('<p>Users online: ' + ids.length + '</p>' + list(ids));
    })
})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
