'use strict';

var express = require('express');
var path = require('path');
var redis = require('redis');

var db = redis.createClient();

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// populate search

db.sadd('ferret', 'tobi');
db.sadd('ferret', 'loki');
db.sadd('ferret', 'jane');
db.sadd('cat', 'manny');
db.sadd('cat', 'luna');

// GET search for :query
app.get('/search/:query?', function (req, res) {
    var query = req.params.query;
    db.sMembers(query, function (err, vals) {
        if (err) return res.send(500);
        res.send(vals)
    })
})

// GET client javascript. Here we use sendFile() because serving __dirname with the static() middleware
// would also mean serving our server "index.js" and the "search.jade" template

app.get('/client.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'client.js'));
})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000')
}