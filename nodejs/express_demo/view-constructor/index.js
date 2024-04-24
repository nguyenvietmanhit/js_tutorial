'use strict';

var express = require('express');
var GithubView1 = require('./github-view');
var md = require('marked').parse;

var app = module.exports = express();

// Register .md as an engine in express view system
app.engine('md', function (str, options, fn) {
    try {
        var html = md(str);
        html = html.replace(/\{([^}]+)\}/g, function(_, name){
            return options[name] || '';
        });
        fn(null, html);
    } catch (err) {
        fn(err);
    }
})

// Pointing a particular github repo to load files from it
app.set('views', 'expressjs/express');

// Register a new view constructor
app.set('view', GithubView1);

app.get('/', (req, res) => {
    // Rendering a view relative to the repo.
    // app.locals, res.locals, and locals passed work like they normally would
    res.render('Readme.md');
})

app.get('/Readme.md', (req, res) => {
    // rendering a view from https://github.com/expressjs/express/blob/master/Readme.md
    res.render('Readme.md');
})

if(!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
