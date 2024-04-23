'use strict';

var escapeHTML = require('escape-html');
var express = require('express');

var verbose = process.env.NODE_ENV !== 'test';

var app = module.exports = express();

app.map = (a, route) => {
    route = route || '';
    for (var key in a) {
        switch (typeof a[key]) {
            // {'/path' : {...}}
            case 'object':
                app.map(a[key], route + key);
                break;
            // get: function() {...}
            case 'function':
                if (verbose) console.log('%s %s', key, route);
                app[key](route, a[key]);
                break;
        }
    }
}

var users = {
    list: (req, res) => {
        res.send('user list');
    },
    get: (req, res) => {
        res.send('User ' + escapeHTML(req.params.uid))
    },
    delete: (req, res) => {
        res.send('Delete users');
    }
}

var pets = {
    list: (req, res) => {
        res.send('User ' + escapeHTML(req.params.uid) + '\'s pets');
    },
    delete: function (req, res) {
        res.send('Delete ' + escapeHTML(req.params.uid) + '\'s pet ' + escapeHTML(req.params.pid))
    }
}

app.map({
    '/users': {
        get: users.list,
        delete: users.delete,
        '/:uid': {
            get: users.get,
            '/pets': {
                get: pets.list,
                ':/pid': {
                    delete: pets.delete
                }
            }
        }
    }
})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
