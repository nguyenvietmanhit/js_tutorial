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


const myFunctionA = require('./myModule');
myFunctionA();


const myModule2 = require('./myModule2');
console.log(myModule2)
console.log(myModule2.foo)
myModule2.myFunction1();
myModule2.myFunction2();
