const http = require('http');
const fs = require('fs');

// Get content of HTML CSS JS and logo files
const homePage = fs.readFileSync('./index.html');
const homeStyles = fs.readFileSync('./styles.css');
const homeLogo = fs.readFileSync('./logo.svg');
const homeLogic = fs.readFileSync('./browser-app.js')

// Create the Server
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>')
        res.end();
    }
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles);
        res.end();
    } else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic);
        res.end();
    } else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeLogo);
        res.end();
    }

    else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Resource Not Found</h1>')
        res.end();
    }
})
server.listen(5000, () => {
    console.log('Server listening at port 5000')
})
//
