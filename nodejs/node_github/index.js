// // // import {name, age} from './app';
// // // const {name, age} = require('./app.js')
// // // console.log(name, age)
// // const app = require('./app');
// // console.log(app.add(2, 3))
// //
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const greaterThan5 = arr.filter((element) => element > 5);
// // console.log(greaterThan5)
// //
// // const arr1 = [1,2,3,4,4,4,5,6,7,8,9,10];
// // const mostRepeated = arr1.filter((element) => element === 4);
// // console.log(mostRepeated)
// // // console.log(__dirname)
// // // console.log(__filename)
// //
// // const {writeFileSync} = require('fs');
// // writeFileSync('hello.txt', 'abc')
// //
// // const colors = require('colors');
// // //This will print the text in red
// // console.log('Hello World'.rainbow);
// //
// // //This will print the text in blue
// // console.log('Hello World'.blue);
// //
// // //This will print the text in yellow
// // console.log('Hello World'.yellow);
// //
// // //This will print the text in green
// // console.log('Hello World'.green);
// //
// // //This will print the text in magenta
// // console.log('Hello World'.magenta);
// //
// // //This will print the text in cyan
// // console.log('Hello World'.cyan);
// //
// // //This will print the text in white
// // console.log('Hello World'.white);
// //
// // //This will print the text in gray
// // console.log('Hello World'.gray);
// //
// // console.log("dsadsads")
// //
// // var a = '5';
// // var b = 6;
// // console.log(a+b)
// //
// //
// // console.log(process.argv)
//
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files')
// for (var i=0;i<10;i++) {
//     fs.writeFileSync(dirPath + `/file${i}.txt`, `Hello World! ${i}`);
// }
//
// fs.readdir(dirPath, (err, files) => {
//     if (err) {
//         console.error(err);
//         return
//     }
//     console.warn(files)
// })
//
// fs.readdir(dirPath, (err, files) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     files.forEach((file, index) => {
//         console.warn(index, file)
//     })
// })

const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/hello.txt`;
// Create
fs.writeFileSync(filePath, 'Hello from Node.js')

// Read
fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log(data)
})

// Update
fs.appendFile(filePath, 'CodeXam', (err) => {
    if (err) throw err;
    console.log(`The 'data to append' was appended to file!`)
})

// Rename
fs.rename(filePath, `${dirPath}/rename.txt`, (err) => {
    if (err) throw err;
    console.log('Rename complete!')
})

// Delete
fs.unlinkSync(`${dirPath}/rename.txt`);

const https = require('https');
// const fs = require('fs');

const url = 'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?cs=srgb&dl=pexels-jovana-nesic-188639-593655.jpg&fm=jpg';
const file = fs.createWriteStream('image.jpg');
https.get(url, (response) => {
    response.pipe(file)
})
