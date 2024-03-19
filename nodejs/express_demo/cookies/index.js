'use strict';

var express = require('express');
var app = module.exports = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// Custom log format
if (process.env.NODE_ENV !== 'test') app.use(logger(':method :url'));

// Parses request cookies, populating req.cookies and req.signedCookies when the secret is passed,
//used for signing the cookies
app.use(cookieParser('my secret here'));

// Parses x-www-form-urlencoded
app.use(express.urlencoded({extended: false}))

app.get('/', function(req,res) {
    if(req.cookies.remember) {
        res.send('Remembered: Click <a href="/forget">Forget</a> ');
    } else {
        res.send('<form method="post"><p>Check to <label>'
            + '<input type="checkbox" name="remember"/> remember me</label> '
            + '<input type="submit" value="Submit"/>.</p></form>');
    }
})

app.get('/forget', function (req, res) {
    res.clearCookie('remember');
    res.redirect('back');
})

app.post('/', function (req, res) {
    var minute = 60000;
    if (req.body.remember) res.cookie('remember', 1, {maxAge: minute});
    res.redirect('back');
})

if (!module.parent) {
    app.listen(3001)
    console.log('Express started on port 3001')
}
