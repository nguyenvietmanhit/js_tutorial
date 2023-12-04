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
// Tuple: act as array but element is fixed and type of element is defined, not the same
var skillC;
skillC = ['Programming', 5];
var skillD;
// skillD = [5, 'Programming']; // error change order
var colorD = [255, 0, 0];
// Use question mark to allow element or not
var bgColorA, headerColorA;
bgColorA = [0, 255, 255, 0.5];
headerColorA = [0, 255, 255];
//Enum
// use declare constant small and known type relative each other
// under the hood, is object with named property and value
var MonthA;
(function (MonthA) {
    MonthA[MonthA["Jan"] = 0] = "Jan";
    MonthA[MonthA["Feb"] = 1] = "Feb";
    MonthA[MonthA["Mar"] = 2] = "Mar";
    MonthA[MonthA["Apr"] = 3] = "Apr";
    MonthA[MonthA["May"] = 4] = "May";
    MonthA[MonthA["Jun"] = 5] = "Jun";
    MonthA[MonthA["Jul"] = 6] = "Jul";
    MonthA[MonthA["Aug"] = 7] = "Aug";
    MonthA[MonthA["Sep"] = 8] = "Sep";
    MonthA[MonthA["Oct"] = 9] = "Oct";
    MonthA[MonthA["Nov"] = 10] = "Nov";
    MonthA[MonthA["Dec"] = 11] = "Dec";
})(MonthA || (MonthA = {}));
console.log(MonthA);
function isItSummerA(month) {
    var isSummer;
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
var MonthB;
(function (MonthB) {
    MonthB[MonthB["Jan"] = 6] = "Jan";
    MonthB[MonthB["Feb"] = 7] = "Feb";
    MonthB[MonthB["Mar"] = 8] = "Mar";
    MonthB[MonthB["Apr"] = 9] = "Apr";
    MonthB[MonthB["May"] = 10] = "May";
    MonthB[MonthB["Jun"] = 11] = "Jun";
    MonthB[MonthB["Jul"] = 12] = "Jul";
    MonthB[MonthB["Aug"] = 13] = "Aug";
    MonthB[MonthB["Sep"] = 14] = "Sep";
    MonthB[MonthB["Oct"] = 15] = "Oct";
    MonthB[MonthB["Nov"] = 16] = "Nov";
    MonthB[MonthB["Dec"] = 17] = "Dec";
})(MonthB || (MonthB = {}));
var ApprovalStatusA;
(function (ApprovalStatusA) {
    ApprovalStatusA[ApprovalStatusA["draft"] = 0] = "draft";
    ApprovalStatusA[ApprovalStatusA["submitted"] = 1] = "submitted";
    ApprovalStatusA[ApprovalStatusA["approved"] = 2] = "approved";
    ApprovalStatusA[ApprovalStatusA["rejected"] = 3] = "rejected";
})(ApprovalStatusA || (ApprovalStatusA = {}));
var requestA = {
    id: 1,
    status: ApprovalStatusA.approved,
    description: 'Please approve this request'
};
if (requestA.status === ApprovalStatusA.approved) {
    console.log('Send email to the Applicant');
}
// any type: store value of any type, allow complier skip type-checking
// Use to store a value that unknow type at the complier time or when migrate old JS to TS
var jsonA = "{\"latitude\": 10.11, \"longitude\": 12.12}";
var currentLocationA = JSON.parse(jsonA);
console.log(currentLocationA);
console.log(currentLocationA.x);
// default, TS infer type implicity when declare variable but dont specify type
var resultA; // implicity to any
var resultB;
resultB = 10.123;
console.log(resultB.toFixed());
// resultB.willExist(); // error at the runtime
// void type: use when function dont return any value, use to improve clarity of code and ensure type-safe
function logA(message) {
    console.log(message);
}
var uselessA = undefined;
uselessA = null;
// never type: use when function throw error or contain indefinite loop
function raiseErrorA(message) {
    throw new Error(message);
}
function rejectA() {
    throw raiseErrorA('Rejected');
}
var loopA = function foreverA() {
    while (true) {
        console.log('Hello');
    }
};
function fnA(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === 'number') {
        return false;
    }
}
function fnB(a) {
    if (typeof a === 'string') {
        return true;
    }
    else if (typeof a === 'number') {
        return false;
    }
    return neverOccurA();
}
var neverOccurA = function () {
    throw new Error('Never!');
};
// union type: store a value of multiple type, use | denotation
function addA(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
// addA(true, false)
var resultC;
resultC = 10;
resultC = 'Hi';
// resultC = false; // false because incorrect type
function addD(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
// Instead of any type dont show error when compile, use union type to show error when compile that call parameter
addD(1, 2);
