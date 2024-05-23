// const http = require('http');
// http.createServer((req, res) => {
//     // res.write('Hello World');
//     res.write('<h1>Hello World</h1>')
//     res.end();
// }).listen(4500)

// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(JSON.stringify({name: 'Subham', age: 202}));
//     res.end();
// }).listen(5000);

const http = require('http');
const data = require('./data');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)
