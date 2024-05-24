let x = 10;
let y = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 2000)
})

waitingData.then((data) => {
    let b = data;
    console.log(x + b)
})

