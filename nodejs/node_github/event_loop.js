// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'), 500);
// const baz = () => console.log('Third');
//
// bar();
// foo();
// baz();

console.log('Starting index.js');

setTimeout(() => {
    console.log('Delay 2 seconds...')
}, 2000);

setTimeout(() => {
    console.log('Delay 0 seconds...');
}, 0);

console.log('Finished index.js');

// Call stack: function no timer will push to this, when react to end function it will push off call stack
// if it has a timer, it will move to Node API and add to Callback Queue/Event Queue, Event loop check constantly call stack, if call stack empty then
// push timer to call stack to execute. call stack LIFO
// Node API: based on Libuv libarry of C++
// Callback Queue/Event Queue: contain function which has timer, use FIFO structure data
// Event Loop: check constantly callback queue/event queue to push call stack if call stack is empty
