function getProductA(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var productA = getProductA(1);
console.log("The product ".concat(productA.name, " costs $").concat(productA.price));
var showProductA = function (name, price) {
    console.log("The product ".concat(name, " costs $").concat(price));
};
showProductA(productA.name, productA.price);
// JS is dynamically typed, providing flexibility but also leading to many problems
// TS adds an optional type system to JS to solve these problems
// - Type is a label that describes the different properties and methos that a value has
// Primitive type: string, number, boolean, null, undefined, symbol
// Object type: function, array, class
// Show type
// const headingA = document.querySelector('h1');
// Type annotation
var counterA;
counterA = 1;
var counterB = 1;
var nameA = 'John';
var ageA = 25;
var activeA = true;
// Array annotation
var namesA = ['a', 'b', 'c', 'd'];
// Object annotation
var personA;
personA = {
    name: 'JOhn',
    age: 25
};
// Function arguments and return types
var greetingA;
greetingA = function (name) {
    return "Hi ".concat(name);
};
greetingA = function (name) {
    return name;
};
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
var priceC;
var priceD = 9.95;
var counterC = 0;
var xA = 100, yA = 200;
var binA = 4;
var anotherBinA = 2;
var octalA = 8;
var hexadecimalA = 0XA;
// let bigIntA: bigint = 9007199254740991n;
// Avoid using the Number type as much as possible
// Typescript String
// in TS, all strings has string type, use double quote, single quote and backtick to surround string literals
var firstNameA = 'John';
var titleA = 'Web Developer';
var descriptionA = "This TypeScript string can\nspan multiple\nlines";
console.log(descriptionA);
// String interpolation: allow embed variabble into string
var firstNameB = "John";
var titleB = "Web Developer";
var profileB = "I'm ".concat(firstNameB, ".\nI'm a ").concat(titleB, "\n");
console.log(profileB);
// TypeScript Boolean: has two value is true or false, use boolean keyword to declare boolean variable, don't use Boolean type as much possible
var pendingA;
pendingA = true;
function changeStatusA(status) {
    return true;
}
// Typescript Object Type
// Primitive type: number, bigint, string, boolean, null, undefined, symbol
var employeeA;
employeeA = {
    firstName: 'John',
    lsatName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employeeA);
// console.log(employeeA.firstName); //error with TS, JS not error and return undefined
var employeeB;
employeeB = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employeeB.firstName);
// Combine declare type and assign value
var employeeC = {
    firstName: 'Manhnv',
    lastName: 'Viet',
    age: 33,
    jobTitle: 'web'
};
console.log(employeeC);
// object and Object
// object is not primitive - type and Object contain functions can be accessible by any object
// Empty type {}
var vacantA = {};
// vacantA.firstName = 'abc'; //
var vacantB = {};
console.log(vacantB.toString());
// TypeScript Array Type
// let skillsA: string[]; // Array of string
// skillsA.push('111')
// console.log(skillsA)
var seriesA = [1, 2, 3];
console.log(seriesA.length);
var seriesB = [1, 2, 3];
var doubleItB = seriesB.map(function (e) { return e * 2; });
console.log(doubleItB);
var scoresA = ['Programming', 5, 'Software Design', 4];
console.log(typeof scoresA);
var scoresB;
scoresB = ['Programming', 1, 'abc', 2];
console.log(scoresB);
