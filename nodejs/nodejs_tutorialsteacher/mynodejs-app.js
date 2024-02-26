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

