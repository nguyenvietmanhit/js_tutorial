console.log('Hello World');
// repl use node command
// in Node, default to local, differ in browser declare without var keyword become to global
module.exports.log = {
    console: function (msg){
        console.log(msg)
    },
    file: function (msg) {
        console.log('aaaa')
    }
}

var httpA = require('http'); //do not specify ./
var serverA = httpA.createServer((req, res) => {
    console.log('Listen')
})
// serverA.listen(5000)

//
var myLogModuleA = require('./Log');
myLogModuleA.info('Node.js started')

var msgA = require('./Message'); //must be specify ./
console.log(msgA)

var msgB = require('./MessagesObject');
console.log(msgB.SimpleMessage)

var msgC = require('./MessageObject2');
msgC.log('Import from module MessagesObject2')

var personA = require('./MessagesObject3');
console.log(personA.firstName + ' ' + personA.lastName);

var msgD = require('./AnonymousFunction');
msgD('Hello from AnonymousFunction module')

var objA = require('./ClassExport');
var objB = new objA('Nguyen Viet', 'Manh');
console.log(objB.fullName())


var logB = require('./utility');
console.log(logB)
