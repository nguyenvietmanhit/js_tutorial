const express = require('express');
const app = express();
const port = 3000;
// app.use(express.static('public'))
// app.use(express.static('files'))

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello Worlddsad1111');
})
var path = require('path');
console.log(path.join(__dirname, ''))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
