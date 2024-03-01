var fsA = require('fs');
fsA.readFile('test_file.txt', {'encoding': 'utf8'}, function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data)
})

var fsB = require('fs');
var dataB = fsB.readFileSync('test_file.txt', {encoding: 'utf8'});
console.log(dataB)

var fsC = require('fs');
fsC.writeFile('test.txt', 'Hello world', function(err) {
    if (err) console.log(err);
    else console.log('Write operation complete')
})

var fsD = require('fs');
fsD.appendFile('test1.txt', 'Hello World', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Append operation complete');
    }
})

//
var fsE = require('fs');
fsE.open('test_file.txt', 'r', function (err, fd) {
    if (err) {
        return console.log(err);
    }

    var buffr = new Buffer(1024);
    fsE.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
        if (err) throw err;

        if (bytes > 0) {
            console.log(buffr.slice(0, bytes).toString());
        }

        fsE.close(fd, function (err) {
            if(err) throw err
        })
    })
})
