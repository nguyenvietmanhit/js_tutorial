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
// const headingA = document.querySelector('h1');


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
// document.addEventListener('click', function (event) {
//     console.log(event.button)
// })
//
// document.addEventListener('scroll', function (event) {
//     // console.log(event.button)
// })

// Type inference and Type annotation
// inference guess type, annotation specify explicitly type
// In practive, always use inference much as impossible

// Typescript number
let priceC: number;
let priceD = 9.95;
let counterC: number = 0;
let xA: number = 100, yA: number = 200;

let binA = 0b100;
let anotherBinA = 0b010;

let octalA: number = 0o10;

 let hexadecimalA: number = 0XA;

 // let bigIntA: bigint = 9007199254740991n;
// Avoid using the Number type as much as possible

// Typescript String
// in TS, all strings has string type, use double quote, single quote and backtick to surround string literals
let firstNameA: string = 'John';
let titleA: string = 'Web Developer';
let descriptionA = `This TypeScript string can
span multiple
lines`;
console.log(descriptionA)
// String interpolation: allow embed variabble into string
let firstNameB: string = `John`;
let titleB: string = `Web Developer`;
let profileB: string = `I'm ${firstNameB}.
I'm a ${titleB}
`;
console.log(profileB)

// TypeScript Boolean: has two value is true or false, use boolean keyword to declare boolean variable, don't use Boolean type as much possible
let pendingA: boolean;
pendingA = true;


function changeStatusA(status: boolean): boolean {
    return true;
}

// Typescript Object Type
// Primitive type: number, bigint, string, boolean, null, undefined, symbol
let employeeA: object;
employeeA = {
    firstName: 'John',
    lsatName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
}
console.log(employeeA)
// console.log(employeeA.firstName); //error with TS, JS not error and return undefined

let employeeB: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
}

employeeB = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
}
console.log(employeeB.firstName)

// Combine declare type and assign value
let employeeC: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'Manhnv',
    lastName: 'Viet',
    age: 33,
    jobTitle: 'web'
}
console.log(employeeC)

// object and Object
// object is not primitive - type and Object contain functions can be accessible by any object
// Empty type {}
let vacantA = {};
// vacantA.firstName = 'abc'; //
 let vacantB: {} = {};
 console.log(vacantB.toString());

 // TypeScript Array Type
// let skillsA: string[]; // Array of string
// skillsA.push('111')
// console.log(skillsA)

let seriesA = [1, 2, 3];
console.log(seriesA.length)

let seriesB = [1, 2, 3];
let doubleItB = seriesB.map(e => e * 2);
console.log(doubleItB);

let scoresA = ['Programming', 5, 'Software Design', 4];
console.log(typeof scoresA)
let scoresB: (string | number)[];
scoresB = ['Programming', 1, 'abc', 2];
console.log(scoresB)

// Tuple: act as array but element is fixed and type of element is defined, not the same
let skillC: [string, number];
skillC = ['Programming', 5];

let skillD: [string, number];
// skillD = [5, 'Programming']; // error change order

let colorD: [number, number, number] = [255, 0 ,0];

// Use question mark to allow element or not
let bgColorA, headerColorA: [number, number, number, number?];
bgColorA = [0, 255, 255, 0.5];
headerColorA = [0, 255, 255];

//Enum
// use declare constant small and known type relative each other
// under the hood, is object with named property and value
enum MonthA {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
console.log(MonthA)

function isItSummerA(month: MonthA) {
    let isSummer: boolean;
    switch (month) {
        case MonthA.Jun:
        case MonthA.Jul:
        case MonthA.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummerA(MonthA.Jun));
console.log(isItSummerA(6));

enum MonthB {
    Jan = 6,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

enum ApprovalStatusA {
    draft,
    submitted,
    approved,
    rejected
}
const requestA = {
    id: 1,
    status: ApprovalStatusA.approved,
    description: 'Please approve this request'
}

if (requestA.status === ApprovalStatusA.approved) {
    console.log('Send email to the Applicant');
}

// any type: store value of any type, allow complier skip type-checking
// Use to store a value that unknow type at the complier time or when migrate old JS to TS
const jsonA = `{"latitude": 10.11, "longitude": 12.12}`;
const currentLocationA = JSON.parse(jsonA);
console.log(currentLocationA)
console.log(currentLocationA.x)

// default, TS infer type implicity when declare variable but dont specify type
let resultA; // implicity to any

let resultB: any;
resultB = 10.123;
console.log(resultB.toFixed());
// resultB.willExist(); // error at the runtime

// void type: use when function dont return any value, use to improve clarity of code and ensure type-safe
function logA(message): void {
    console.log(message)
}

let uselessA: void = undefined;
uselessA = null;

// never type: use when function throw error or contain indefinite loop
function raiseErrorA(message: string): never {
    throw new Error(message)
}

function rejectA() {
    throw  raiseErrorA('Rejected');
}

let loopA = function foreverA() {
    while(true) {
        console.log('Hello')
    }
}

function fnA(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === 'number') {
        return false;
    }
}

function fnB(a: string | number): boolean {
    if (typeof a === 'string') {
        return true;
    } else if (typeof a === 'number') {
        return false;
    }
    return neverOccurA();
}

let neverOccurA = () => {
    throw new Error('Never!');
}

// union type: store a value of multiple type, use | denotation
function addA(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
// addA(true, false)

let resultC: number | string;
resultC = 10;
resultC = 'Hi';
// resultC = false; // false because incorrect type

function addD(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    }
    throw new Error('Parameters must be numbers or strings');
}
// Instead of any type dont show error when compile, use union type to show error when compile that call parameter
addD(1, 2)
// addD(true, false); //show error when compile, parameter incorrect
