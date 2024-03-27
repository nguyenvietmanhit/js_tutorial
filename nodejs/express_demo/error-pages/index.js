'use strict';
var express = require('express');
var path = require('path');
var app = module.exports = express();
var logger = require('morgan');
var silent = process.env.NODE_ENV === 'test';


// General config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Our custom "verbose errors" setting which we can use in the templates via settings['verbose errors']
app.enable('verbose errors')

silent || app.use(logger('dev'));

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.use(function(req, res, next) {
    console.log('Middleware đã được kích hoạt111111111!');
    next(); // Tiếp tục sang middleware hoặc route tiếp theo
});

app.get('/404', (req, res, next) => {
    // Trigger  a 404 since no other middleware will match /404 after this one,
    // and we're not responding here
    console.log("4044444")
    next();
});

app.use(function(req, res, next) {
    console.log('Middleware đã được kích hoạt!');
    next(); // Tiếp tục sang middleware hoặc route tiếp theo
});

app.get('/403', (req, res, next) => {
    // Trigger a 403 error
    var err = new Error('Not allowed');
    err.status = 403;
    next(err)
})

app.get('/500', (req, res, next) => {
    // Trigger a generic (500) error
    next(new Error('Keyboard cat!'));
})

// Error handlers

// Since this is the last non-error-handling middleware used, we assume 404, as nothing else responded
// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"
// When connect has an error, it will invoke ONLY error-handling middleware
app.use((req, res, next) => {
    console.log("Dsadsa")
    res.status(404);
    res.format({
        html: () => {
            res.render('404', { url: req.url })
        },
        json: () => {
            res.json({ error: 'Not found'})
        },
        default: () => {
            res.type('txt').send('Not found');
        }
    })

})

// Error-handling middleware, take the same form as regular middleware, however they require an arity of 4,
// aka the signature (err, req, res, next).

// If we were to next() here any remaining non-error-handling middleware would then be executed,
// or if we next(err) to continue passing the error, only error-hadleing middleware would remain being executed,
// however here we simply respond with an error page
app.use((err, req, res, next) => {
    // we may use properties of the error object here and next(err) appropriately, or if we possibly recovered from the error, simply next()
    console.log("final")
    res.status(err.status || 500);
    res.render('500', {error: err});
})

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
//middleware stop when no middleware found or responded to client
