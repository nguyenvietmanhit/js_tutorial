"use strict";

var escapeHtml = require('escape-html');
var express = require('express');
var fs = require('fs');
var marked = require('marked');
var path = require('path');

var app = module.exports = express();

// Register .md as an engine in express view system
app.engine('md', function(path, options, fn) {
    fs.readFile(path, 'utf-8', function (err, str) {
        if (err) return fn(err);
        var html = marked.parse(str).replace(/\{([^}]+)\}/g, function(_, name){
            return escapeHtml(options[name] || '');
        });
        fn(null, html);
    })
})

app.set('views', path.join(__dirname, 'views'));
// Make it the default, so we don't need .md
app.set('view engine', 'md');

app.get('/', (req, res) => {
    res.render('index', { title: 'Markdown Example'});
})

app.get('/fail', (req, res) => {
    res.render('missing', { title: 'Markdown Example'});
})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000')
}
