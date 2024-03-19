'use strict';

var express = require('express');
var hash = require('pbkdf2-password')();
var path = require('path');
var session = require('express-session');

var app = module.exports = express();

// config
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname), '/views');

// middleware
app.use(express.urlencoded( {extended: true}));
app.use(session({
    resave: false, //dont save session if unmodified
    saveUninitialized: false, //dont create session until something stored,
    secret: 'shhhh, very secret'
}));

// Session-persisted message middleware
app.use(function (req, res, next) {
    var err = req.session.error;
    var msg = req.session.success;
    delete req.session.error;
    delete  req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
})

// dummy database
var users = {
    tj: { name: 'tj'}
};

// When you create a user, generate a salt and hash the password ('foobar' is the pass here)
hash({password: 'foobar'}, (err, pass, salt, hash) => {
    if (err) throw err;
    // Store the salt and hast in the dummy db
    users.tj.salt = salt;
    users.tj.hash = hash;
})

// Authenticate using our plain-object database of doom
function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    var user = users[name];
    // Query the db for the given username
    if (!user) {
        return fn(null, null);
    }
    // Apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we found the user
    hash ({password: pass, salt: user.salt}, function (err, pass, salt, hash) {
        if (err) return fn(err);
        if (hash === user.hash) {
            return fn(null, user);
        }
        fn(null, null);
    })
}

function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied';
        res.redirect('/login');
    }
}

app.get('/', function (req, res) {
    res.redirect('/login');
})

app.get('/restricted', restrict, function (req, res) {
    res.send('Wahoo! Restricted area, click to <a href="/logout">Logout</a>');
})

app.get('/logout', function (req, res) {
    // Destroy the user's session to log them out will be re-created next request
    req.session.destroy(function() {
        res.redirect('/');
    })
})

app.get('/login', function (req, res) {
    res.render('login');
})

app.post('/login', function (req, res, next) {
    authenticate(req.body.username, req.body.password, function (err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            // Regenerate session when signing in to prevent fixation
            req.session.regenerate(function() {
                // Store the user's primary key in the session store to be retrieved,
                // or in this case the entire user object
                req.session.user = user;
                req.session.success = 'Autheticated as ' + user.name
                + ' click to <a href="/logout">Logout</a>.'
                + ' You may now access <a href="/restricted">Restricted</a>.';
                res.redirect('back');
            })
        } else {
            req.session.error = 'Authentication failed, please check your '
            + ' username and password'
            + ' (use "tj" and "foobar")';
            res.redirect('/login');
        }
    })
})

//istanbul ignore next
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000')
}
