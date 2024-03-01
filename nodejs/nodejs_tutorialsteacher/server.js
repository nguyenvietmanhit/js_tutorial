// var httpA = require('http');
// var serverB = httpA.createServer(function (req, res) {
//     console.log('running')
// })
// serverB.listen(5000);
// console.log('Node JS web server at port 5000 is running...');


var httpB = require('http');
var serverB = httpB.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>')
        res.end();
    } else if (req.url === '/student') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student page</p></body></html>')
        res.end();
    } else if (req.url === "/admin") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    } else
        res.end('Invalid Request!');
})
serverB.listen(5002);
console.log('Node js web server at port 5002 is running...')

// JSON
var httpC = require('http');
var serverC = httpC.createServer(function (req, res) {
    if (req.url === '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'Hello World'}));
        res.end();
    }
})
serverC.listen(5001);
console.log('Node js web server at port 5001 is running');
