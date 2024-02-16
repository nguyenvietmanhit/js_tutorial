function myFunctionB() {
    console.log('Hello from myFunctionB');
}

function myFunctionC() {
    console.log('Hello from myFunctionC');
}

module.exports = myFunctionB; // overwrite

module.exports = myFunctionC; // only accept
