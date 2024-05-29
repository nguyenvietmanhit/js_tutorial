// // // const express = require('express');
// // // const app = express();
// // //
// // // app.get('/', function(req, res) {
// // //     res.send('Hello World');
// // // })
// // //
// // // app.listen(3000, function () {
// // //     console.log('Example app listening on port 30001!');
// // // })
// //
// //
// // const express = require('express');
// // const app = express();
// //
// // app.get('/', (req, res) => {
// //     console.log('Data send by the client: ', req.query.id);
// //     res.send("<h1>This is our main Page</h1>");
// // })
// //
// // app.get("/about", (req, res) => {
// //     res.send(`
// //     <input type="text" placeholder="Enter your name" />
// //     <button>Submit</button>
// //     `)
// // })
// //
// // // app.get('/data', (req, res) => {
// // //     res.send({
// // //         name: "Manhnv",
// // //         age: 16,
// // //         country: "India"
// // //     })
// // // })
// //
// // app.get('/data', (req, res) => {
// //     res.send([
// //         {
// //             name: "manhnv 1",
// //             age: 16,
// //             country: "india"
// //         },
// //         {
// //             name: "Raj sharma",
// //             age: 17,
// //             country: "India"
// //         }
// //     ])
// // })
// //
// // app.listen(5001);
//
//
// const express = require('express');
// const app = express();
//
// app.get('/', (req, res) => {
//     console.log("Data send by the client: ", req.query.id);
//     res.send("<h1>This is our main page</h1> <a href='/about'>About</a>")
// })
//
// app.get('/about', (req, res) => {
//     res.send(`
//     <input type="text" placeholder="Enter your name" />
//     <button>Submit</button>
//     <a href="/">Home</a>
//     `)
// })
//
// app.get('/data', (req, res) => {
//     res.send([
//         {
//             name: 'manhvn1',
//             age: 16,
//             country: "vn1"
//         },
//         {
//             name: 'manhnv2',
//             age: 18,
//             country: "vn2"
//         }
//     ])
// })
//
// app.listen(5001)


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Data send by the client: ", req.query.id);
    res.send("<h1>This is our main page</h1> <a href='/about'>About</a>");
})

app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="Enter your name" value=${req.query.name} />
    <a href="/">Home</a>
    `)
})

app.get('/data', (req, res) => {
    res.send([
        {
            name: "manhnv1",
            age: 16,
            country: "india"
        },
        {
            name: "manhnv2",
            age: 17,
            country: "india2"
        }
    ])
})

app.listen(5001);
