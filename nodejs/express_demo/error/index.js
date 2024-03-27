'use strict'
var express = require('express');
var logger = require('morgan');
var app = module.exports = express();
var test = app.get('env') === 'test';

if (!test) app.use(logger('dev'));

// Error handling middleware have an arity of 4 instead of the typical (req, res, next),
// Otherwise they behave exactly like regular middleware, you may have several of them in different orders etc
function error(err, req, res, next) {
    // Log it
    if (!test) console.error(err.stack);

    // Respond with 500 "Internal Server Error"
    res.status(500);
    res.send("Internal Server Error");
}

app.use(function(req, res, next) {
    console.log('Middleware đã được kích hoạt!');
    next(); // Tiếp tục sang middleware hoặc route tiếp theo
});

app.get('/', function () {
    // Caught and passed down to the errorHandler middleware
    throw new Error('Something broke!');

})

app.get('/next', (req, res, next) => {
    // We can also pass exceptions to next()
    // The reason for process.nextTick() is to show that next() can be called inside an async operation,
    // in real life it can be a DB read or HTTP request
    process.nextTick(function() {
        next(new Error('oh no!'));
    })
})

// The error handler is placed after routes if it were above it would not receive errors from app.get etc
app.use(error);

app.use(function(req, res, next) {
    console.log('Middleware đã được kích hoạt!');
    next(); // Tiếp tục sang middleware hoặc route tiếp theo
});

if(!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
