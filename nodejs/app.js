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

// built module in NodeJS
// - OS Module
const osA = require('os');
console.log(osA.uptime()); //uid and gid = -1 because window does not concept Unix-based systems
console.log(osA.userInfo())
const otherInfoA = {
    name: osA.type(),
    release: osA.release(),
    totalMem: osA.totalmem(),
    freeMem: osA.freemem()
}
console.log(otherInfoA)
// - Path Module
const pathA = require('path');
const myPathA = '/abc/def/ghi/abc.js';
const pathInfoA = {
    fileName: pathA.basename(myPathA),
    folderName: pathA.dirname(myPathA),
    fileExtenstion: pathA.extname(myPathA),
    absoluteOrNot: pathA.isAbsolute(myPathA),
    detailInfo: pathA.parse(myPathA)
}
console.log(pathInfoA)
console.log(pathA.sep); //Window separator path is \, Linux MacOS is /
console.log(pathA.join('abc', 'def', 'ghi.txt'))
console.log(pathA.resolve('abc', 'def', 'ghi.txt'))
// - FS Module (File System)
const fsA = require('fs');
fsA.mkdir('./myFolder', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Folder Created Successfully')
    }
})

// Override file
const fsB = require('fs');
const dataB = 'Hi, this is newFile.txt';
fsB.writeFile('myFolder/MyFile.txt', dataB, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Written to file successfully!');
})

// Append file
const fsC = require('fs');
const dataC = 'Hi, this is newFile.txt';
fsC.writeFile('myFolder/abc.txt', dataC, {flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Written to file successfully!')
})

// readFile
const fsD = require('fs');
fsD.readFile('./myFolder/abc.txt', {encoding: 'utf8'}, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File read successfully! Here is the data');
    console.log(data)
})

// Write and red file sync
const fsE = require('fs');
try {
    fsE.writeFileSync('./myFolder1/myFileSync1.txt', 'myFileSync says Hi');
    console.log('Write operation successful');

    const fileDataD = fsE.readFileSync('./myFolder1/myFileSync1.txt', 'utf8');
    console.log('Read operation successful. here is the data: ')
    console.log(fileDataD)
} catch (err) {
    console.log('Error occurred!');
    console.log(err)
}

//
const fsF = require('fs');
fsF.readdir('./myFolder', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Directory read successfully! Here are the files:');
    console.log(files)
})

console.log("Dsadsa")

//
// const fsG = require('fs');
// fsG.rename('./newFolder/newFile.txt', './newFolder/newFileAsync.txt', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File renamed successfully!')
// })

//
// const fsH = require('fs');
// fsH.unlink('./myFolder/myFileSync.txt', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File deleted successfully!');
// })

// Event Driven Programming: focus to event instead of logic code, by emit and on function
const EventEmitterA = require('events');
const myEmitterA = new EventEmitterA();
const welcomeUserA = () => {
    console.log('Hi there, Welcome to the server!')
}

myEmitterA.on('userJoined', welcomeUserA);
myEmitterA.emit('userJoined')
console.log('bcd')


const EventEmitterB = require('events');
const myEmitterB = new EventEmitterB();
const sayHelloB = () => {
    console.log('Hello User B');
}

const sayHiB = () => {
    console.log('Hi User B');
}

const greetNewYearB = () => {
    console.log('Happy New Year B!');
}

// Attach multiple on
myEmitterB.on('userJoined', sayHelloB);
myEmitterB.on('userJoined', sayHiB);
myEmitterB.on('userJoined', greetNewYearB)

myEmitterB.emit('userJoined');
// alert('dsadsa')

//
const EventEmitterC = require('events');
const myEmitterC = new EventEmitterC();

const greetBirthdayC = (name, newAge) => {
    console.log(`Happy birthday ${name}. You are now ${newAge}`);
}

myEmitterC.on('birthdayEvent', greetBirthdayC);
// emit event with parameter
myEmitterC.emit('birthdayEvent', 'John', '24')

// emit must be run after on
const EventEmitterD = require('events');
const myEmitterD = new EventEmitterD();

const sayHiD = () => {
    console.log('Hi user D');
}

const sayHelloD = () => {
    console.log('Hello user D');
}

myEmitterD.on('userJoinedD', sayHiD);

myEmitterD.emit('userJoinedD');

myEmitterD.on('userJoinedD', sayHelloD); //dont run because declare after emit

// - HTTP Module
