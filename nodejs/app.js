// global variable
global.myVariableA = 'ABC';

console.log(__dirname)
console.log(__filename);

console.log(myVariableA)

// modules
const sayHelloA = require('./hello.js');
sayHelloA('John')
sayHelloA('Peter')
sayHelloA('Rohit')
