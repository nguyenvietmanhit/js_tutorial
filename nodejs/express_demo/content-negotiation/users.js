'use strict';

var users = require('./db');
module.exports.html = function (req, res) {
    res.send('<ul>' + users.map(function (user) {
        return '<li>' + user.name + '</li>';
    }).join('') + '</ul>');
}

module.exports.text = function (req, res) {
    res.send(users.map(function (user) {
        return ' - ' + user.name + '\n';
    }).join(''));
};

module.exports.json = function (req, res) {
    res.json(users);
}
