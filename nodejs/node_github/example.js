// console.log(process.argv);
// console.log(process.argv[2])
// const fs = require('fs');
// const fileName = process.argv;
// fs.writeFileSync(fileName[2], fileName[3])
const fs = require('fs');
const fileName = process.argv;
if (fileName[2] === 'add') {
    fs.writeFileSync(fileName[3], fileName[4]);
} else if (fileName[2] === 'remove') {
    fs.unlinkSync(fileName[3]);
} else {
    console.log("Please enter a valid command");
}




