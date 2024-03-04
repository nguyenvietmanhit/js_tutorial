var events = require('events');
var em = new events.EventEmitter();
em.on('FirstEvent', function (data) {
    console.log('First subcriber: ' + data);
})

em.emit('FirstEvent', 'This is my first Node.js event emitter example');

//
var emitterA = require('events').EventEmitter;
var emA = new emitterA();

emA.addListener('FirstEventA', function (data) {
    console.log('First subscriber: ' + data);
})

emA.on('SecondEventA', function (data) {
    console.log('Second subscriber: ' + data);
})

emA.emit('FirstEventA', 'This is my first Node.js event emitter example');
emA.emit('SecondEventA', 'This is my second Node.js event emitter example')


var emitterB = require('events').EventEmitter;
function LoopProcessorB(num) {
    var e = new emitterB();
    setTimeout(function() {
        for (var i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            console.log('Processing number: ' + i);
            e.emit('AfterProcess', i)
        }
    }, 2000)
    return e;
}

var lpB = LoopProcessorB(3);
lpB.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
})
lpB.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
})


var emitterC = require('events').EventEmitter;
var utilC = require('util');
function LoopProcessorC(num) {
    var me = this;
    setTimeout(function() {
        for (var i = 1; i<= num; i++) {
            me.emit('BeforeProcessC', i);
            console.log('Processing number: ' + i);
            me.emit('AfterProcessC', i);
        }
    }, 2000);
    return this;
}

utilC.inherits(LoopProcessorC, emitter);

