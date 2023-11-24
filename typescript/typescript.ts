// Fix referencing a property that doesn't exist on an object
interface ProductA {
    id: number,
    name: string,
    price: number
}

function getProductA(id) : ProductA {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const productA = getProductA(1);
console.log(`The product ${productA.name} costs $${productA.price}`);


const showProductA = (name: string, price: number) => {
    console.log(`The product ${name} costs $${price}`);
}

showProductA(productA.name, productA.price);
// JS is dynamically typed, providing flexibility but also leading to many problems
// TS adds an optional type system to JS to solve these problems

// - Type is a label that describes the different properties and methos that a value has

// Primitive type: string, number, boolean, null, undefined, symbol
// Object type: function, array, class
// Show type
const headingA = document.querySelector('h1');


// Type annotation
let counterA: number;
counterA = 1;

let counterB: number = 1;

let nameA: string = 'John';
let ageA: number = 25;
let activeA: boolean = true;

// Array annotation
let namesA: string[] = ['a', 'b', 'c', 'd'];

// Object annotation
let personA: {
    name: string,
    age: number
}

personA = {
    name: 'JOhn',
    age: 25
}

// Function arguments and return types
let greetingA: (name: string) => string;
greetingA = function(name: string) {
    return `Hi ${name}`;
}

greetingA = function(name) {
    return name;
}

// Inference type: base on declare to imply type
// The best common algorithm: analyze item to get best compatible
// Contextual typing
document.addEventListener('click', function (event) {
    console.log(event.button)
})

document.addEventListener('scroll', function (event) {
    console.log(event.button)
})

// Type inference and Type annotation
// inference guess type, annotation specify explicitly type
// In practive, always use inference much as impossible

// Typescript number
let priceC: number;
let priceD = 9.95;
let counterB: number = 0;
let xA: number = 100, yA: number = 200;

let binA = 0b100;
let anotherBinA = 0b010;

let octalA: number = 0o10;

 let hexadecimalA: number = 0XA;

 let bigIntA: bigint = 9007199254740991n;
// Avoid using the Number type as much as possible

// Typescript String

