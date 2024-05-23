// import {name, age} from './app';
// const {name, age} = require('./app.js')
// console.log(name, age)
const app = require('./app');
console.log(app.add(2, 3))

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThan5 = arr.filter((element) => element > 5);
console.log(greaterThan5)

const arr1 = [1,2,3,4,4,4,5,6,7,8,9,10];
const mostRepeated = arr1.filter((element) => element === 4);
console.log(mostRepeated)
// console.log(__dirname)
// console.log(__filename)

const {writeFileSync} = require('fs');
writeFileSync('hello.txt', 'abc')

const colors = require('colors');
//This will print the text in red
console.log('Hello World'.rainbow);

//This will print the text in blue
console.log('Hello World'.blue);

//This will print the text in yellow
console.log('Hello World'.yellow);

//This will print the text in green
console.log('Hello World'.green);

//This will print the text in magenta
console.log('Hello World'.magenta);

//This will print the text in cyan
console.log('Hello World'.cyan);

//This will print the text in white
console.log('Hello World'.white);

//This will print the text in gray
console.log('Hello World'.gray);
