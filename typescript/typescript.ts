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

// type alias: use to define new type base on exist type, useful when use with union type
type charC = string;
let messageC: charC;

type alphanumericA = string | number;
let inputA: alphanumericA;
inputA = 100;
inputA = 'abc';

// inputA = false; // error because incorrect type

// String literal type: use to define string literal specify, combine with union type and type alias to benefit
let clickA: 'click';
clickA = 'click'; //valid

let mouseEventA: 'click' | 'dbclick' | 'mouseup' | 'mousedown';
mouseEventA = 'click';
mouseEventA = 'dbclick';
mouseEventA = 'mouseup';
mouseEventA = 'mousedown';
// mouseEventA = 'mouseover'; // compile error because value is not string literal type

// use type alias to avoid verbose
type MouseEventB = 'click' | 'dbclick' | 'mouseup' | 'mousedown';
let mouseEventB: MouseEventB;
mouseEventB = 'click';
// mouseEventB = 'abc'; //invalid

// Function: use type parameter and return for clear, if function no return, use void
// If dont indicate return type, use infer type
function addF(a: number, b: number) : number {
    return a + b;
}
let sumF = addF(1, 5);

function echoA(message: string): void {
    console.log(message.toUpperCase());
}

// Function type
// let addF: (x: number, y: number) => number;
// addF = function (x: number, y: number): number {
//     return x + y;
// }
// let addF = function(x: number, y: number) {
//     return x + y;
// }

let addG: (a: number, b: number) => number = function (x:number, y:number) {
    return x + y;
}

//compile error because param incompatible
// addG = function (x: string, y: string): number {
//     return x.concat(y).length
// }

// Optional Parameter: use question mark ? to optional parameter
// Optional parameter must appear after required parameter
function abc(a = '') {
    console.log(a)
}
abc();

function multiplyB(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// compile error because optional stand before required parameter
// function multiplyC(a: number, b?: number, c:number): number {
//     if (typeof c !== 'undefined') {
//         return a * b * c;
//     }
//     return a * b;
// }

// Default parameter, from ES2015/ES6
function applyDiscountA(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscountA(100))

function applyDiscountB(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}
console.log(applyDiscountB(100)); //95

// compile error when use default parameter in function type definition
// let promotionA: (price: number, discount: number = 0.05) => number;

// Default parameter is optional, can omit when call function
// Optional parameter must be after required parameters, but default parameter is not
// When use default parameter before required parameter, must set undefined for default parameter
function getDayA(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

let dayA = getDayA(2019, 2);
console.log(dayA)

let dayB = getDayA(undefined, 2);
console.log(dayB);

// Rest Parameters: represent list indefinite number of arguments as an array
// Has array type
// Must be last in parameter list
// Only one rest parameter in parameter list
function getTotalA(a?: number, ...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotalA(1, 2, 3, 4))

// Function Overloading: use to describe clearly more than use union type, relationship between parameter types and the results of a function
function addNumbersA(a: number, b: number): number {
    return a + b;
}

function addStringsA(a: string, b: string): string {
    return a + b;
}

function addH(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}

function addM(a: number, b: number): number;
function addM(a: string, b: string): string;
function addM(a: any, b: any): any {
    return a+ b;
}

console.log(addM(1, 2));

// If overload has more parameter, must be optional parameter when define function
function sumM(a: number,b: number): number;
function sumM(a: number, b: number, c:number): number
function sumM(a: number, b: number, c?: number): number {
    if (c) {
        return a + b + c;
    }
    return a + b;
}

// method overloading: same as function overloading
class CounterM {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let counterM = new CounterM();
console.log(counterM.count());
console.log(counterM.count(20))

// Class
// ES5 use constructor function or prototype inheritance to create a 'class'
// ES5 use constructor function
function PersonA(ssn, firstName, lastName) {
    // console.log(this)
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
console.log(typeof PersonA)

PersonA.prototype.getFullname = function() {
    return `${this.firstName} ${this.lastName}`;
}

let personAA = new PersonA('123', 'viet', 'manh');
console.log(personAA)
console.log(typeof personAA)
console.log(personAA.getFullname())

// ES6
class PersonBB {
    ssn;
    firstName;
    lastName;
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let personBB = new PersonBB('123', 'manh', 'nguyenviet');
console.log(personBB.getFullname())

// TS add type annotation to class
class PersonCC {
    ssn: string;
    firstName: string;
    lastName: string

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let personCC = new PersonCC('dasdsa', 'john', 'doe');
console.log(personCC.getFullName())
// TS use ES6 class syntax and type to powerful

// Access Modifier: private, public, protected, used in class
// private: access inner class
// protected: access inner class and subclass inheritance from it
// public: access everywhere
// Default is public if dont specify modifier
// TS control logic access at the compile time
class PersonDD {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let personDD = new PersonDD('1212', 'manh', 'nguyenvietmanh');
// console.log(personDD.ssn); //compile error because access private modifier

// readonly: use to mark immutable property in class
class PersonEE {
    readonly birthDate: Date;
    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let personEe = new PersonEE(new Date(1990, 12, 25));
//
// personEe.birthDate = 'sdsa'; // compile error because birthDate is readonly
 // combine declare and initialize
class PersonFF {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}

// Diff readonly vs const: readonly use in property class, const use in variable
// readonly use in the declaration or constructor class, const use in the declaration

// Getter and Setter
class PersonF {
    public age: number;
    public firstName: string;
    public lastName: string;
}
let personF = new PersonF();
personF.age = 5;
// Add validate
// use validate in public is redundant and tedious, instead of use getter and setter to check
// getter = accessor, setter = mutator


// Step:
// Change visibility from public -> private
// Change property to prefix _
// Define get and set function, notice set function must be param, check validate in set function
class PersonJ {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullname(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

let personJ = new PersonJ();
personJ.age = 10; // auto call setter
console.log(personJ.age); //auto call getter

//
class PersonK {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 20) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name');
        }
        this._lastName = theLastName;
    }

    public getFullname(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

var personK = new PersonK();
personK.age = 10;
personK.firstName = 'manh';
personK.lastName = 'nguyen viet';
console.log(personK.getFullname())


class PersonL {
    private _firstName;
    private _lastName;

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        this._lastName = theLastName;
    }

    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    public set fullName(name: string) {
        console.log(name)
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

let personL = new PersonL();
personL.fullName = 'nguyen viet';
console.log(personL.fullName)


// Inheritance
// JS use prototype inheritance, not classical inheritance like C or Java.
// From ES6 use class for sugar syntax
// - Use extend keyword for inheritance
// - Use super() at child class to call constructor or super.method() to call method in parent class
class PersonM {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public describe(): string {
        return `This is ${this.firstName} ${this.lastName}`;
    }
}

class EmployeeM extends PersonM {
    constructor(firstName: string, lastName: string, private jobTitle: string) {
        super(firstName, lastName);
    }
    // override method
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}`;
    }
}

let employeeM = new EmployeeM('manh', 'viet', 'BE');
console.log(employeeM.getFullName())
console.log(employeeM.describe())


// static method and property
// use by all instance of class
// use static keyword before property or method
class EmployeeN {
    static headcount: number = 0;

    constructor(private firstName: string, private lastName: string, private jobTitle: string) {
        EmployeeN.headcount++;
    }
}

let employeeN1 = new EmployeeN('1', '2', '3');
let employeeN2 = new EmployeeN('1', '2', '3');
console.log(EmployeeN.headcount)

// static methods
class EmployeeO {
    private static headcount: number = 0;
    constructor(private firstName: string, private lastName: string, private jobTitle: string) {
        EmployeeO.headcount++;
    }

    public static getHeadcount() {
        return EmployeeO.headcount;
    }
}

let employeeO1 = new EmployeeO('1', '2', '3');
let employeeO2 = new EmployeeO('1', '2', '3');
console.log(EmployeeO.getHeadcount())

// abstract class
abstract class EmployeeP {
    constructor(private firstName: string, private lastName: string) {

    }

    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month`;
    }
}

// let employeeP = new EmployeeP(); // error, cannot create an instance of an abstract class
class FullTimeEmployeeP extends EmployeeP {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary;
    }
}

class ContractorP extends EmployeeP {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

let joinP = new FullTimeEmployeeP('John', 'Doe', 120000);
let janeP = new ContractorP('Jane', 'Doe', 100, 160);
console.log(joinP.compensationStatement())
console.log(janeP.compensationStatement())
// Abstract class use to share code among instances, cannot instance, must be least one abstract method

// - Interface
function getFullNameP(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let personP = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(getFullNameP(personP));
// type annotation as above make code hard to read -> use interface instead
interface PersonQ {
    firstName: string;
    lastName: string;
}
// use camel case for name interface

function getFullnameQ(person: PersonQ) {
    return `${person.firstName} ${person.lastName}`;
}

let johnQ = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(getFullnameQ(johnQ));
//

let janeQ = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
}

console.log(getFullnameQ(janeQ))

// Use question mark to make property is optional
interface PersonO {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullnameO(person: PersonO) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

// readonly properties
interface PersonS {
    readonly ssn: string;
    firstName: string;
    lastName: string;
}

let personS: PersonS;
personS = {
    ssn: '123-456-',
    firstName: 'John',
    lastName: 'Doe'
}
//personS.ssn = 'abc'; // error, readonly only use to read, cannot modify
// function type for interface: use to define function type, parameter dont need match with argument
interface StringFormatA {
    (str: string, isUper: boolean): string
}

let formatA: StringFormatA;
formatA = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
}
console.log(formatA('hi', true));
console.log(typeof formatA)

let lowerCaseA: StringFormatA;
lowerCaseA = function (str: string) {
    return str.toLowerCase();
}

console.log(lowerCaseA('Hi', false));

// class types
// interface JsonA {
//     toJSON(): string
// }
// class PersonAA implements JsonA {
//     constructor(private firstName: string, private lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     toJSON(): string {
//         return JSON.stringify(this);
//     }
// }
//
// let personAAA = new PersonAA('John', 'Doe');
// console.log(personAAA.toJSON())

// - Extend interface
interface MailableA {
    send(email: string): boolean
    queue(email: string): boolean
}
// If many class already implement MailableA, after want add more function to interface cause break code,
//use extend interface instead
interface FutureMailableA extends MailableA {
    later(email: string, after: number): boolean
}

class MailA implements FutureMailableA {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Send email to ${email} after ms`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}`)
        return true;
    }
}
// A interface can extend multiple interfaces, separate by comma
// Interface can extend class, inherit properties and methods of class, even private and protected member
class ControlB {
    private state: boolean;
}

interface StatefulControlB extends ControlB {
    enable(): void
}

class ButtonB extends ControlB implements StatefulControlB {
    enable() {

    }
}

class TextBoxB extends ControlB implements StatefulControlB {
    enable() {
    }
}

class LabelB extends ControlB {

}

// class ChartB implements StatefulControlB {
//     enable() {
//     }
// }
// error, class cannot implement interface as interface is inheriting another class
// - Interface vs Abstract
// Both use designing and organizing code
// Interface: define structure, only contain method, support multiple implement, easily extend by add new property/method
// no constructor, object follow to the structure, cannot instance, for design contract and structure
// Abstract: provide common function and structure, contain implement method and abstract method, single inheritance,
// have constructor ...

// - Intersection Type: use & to combine
interface BusinessPartnerA {
    name: string;
    credit: number;
}

interface IdentityA {
    id: number;
    name: string;
}

interface ContactA {
    email: string;
    phone: string;
}

type EmployeeAAA = IdentityA & ContactA;
// Contain all property of combine
let eAAA: EmployeeAAA = {
    id: 100,
    name: 'John Doe',
    email: 'manhnv@a.b',
    phone: '12345'
}

type CustomerAAA = BusinessPartnerA & ContactA;
let cAAA: CustomerAAA = {
    name: 'abc',
    credit: 100000,
    email: 'abc@gmail.com',
    phone: '123-456'
}

type EmployeeBBB = IdentityA & BusinessPartnerA & ContactA;
let eBBB: EmployeeBBB = {
    id: 200,
    credit: 123,
    email: 'abc',
    phone: '12121',
    name: 'abc'
}
// Type order is not important when combine type

// - Type guard

//typeof
type alphanumericB = string | number;
function addBB(a: alphanumericB, b: alphanumericB) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof  b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings')
}

// instanceof
class CustomerBB {
    isCreditAllowed(): boolean {
        return true;
    }
}

class SupplierBB {
    isInShortList(): boolean {
        return true;
    }
}

type BusinessPartnerBB = CustomerBB | SupplierBB;
function signContractBB(partner: BusinessPartnerBB): string {
    let message: string;
    if (partner instanceof CustomerBB) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof SupplierBB) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }
    return message;
}

// in
function signContractCC(partner: BusinessPartnerBB): string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}
// user-defined type guard
function isCustomerA(partner: any): partner is CustomerBB {
    return partner instanceof CustomerBB;
}
function signContractC(partner: BusinessPartnerBB): string {
    let message: string;
    if (isCustomerA(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
}

// - Type Casting
// Default JS dont have type casting
// TS use as keyword or <> to cast type
// - Type assertion
// Instruct complier treat a value as specified type, use as keyword or <> syntac
function getNetPriceA(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPriceA = getNetPriceA(100, 0.05, false) as number;
console.log(netPriceA);

let netPriceB = <number>getNetPriceA(100, 0.05, false);
console.log(netPriceB)

// - Generic
function getRandomNumberElementA(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbersA = [1, 2, 3, 4, 5, 6];
console.log(getRandomNumberElementA(numbersA));

function getRandomStringElementA(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let colorsA = ['red', 'green', 'blue'];
console.log(getRandomStringElementA(colorsA))

// create many function for same function is not scalaable, can use any type instead of but is not safe
//- > use generic
function getRandomElementC<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// above function is generic because it can work with any data type as string, number, objects
//by convention, use freely letters such as A, B, C, T ...
let numbersC = [1, 2, 3, 4, 5];
let randomEleC = getRandomElementC<number>(numbersC); // pass explicity number as type
console.log(randomEleC)
// use type inference to complier auto set T automatically
let numbersD = [1, 2, 3, 4, 5];
let randomEleD = getRandomElementC(numbersD);
console.log(randomEleD)

let numbersE = [1, 2, 3];
let returnElemE: string;
// returnElemE = getRandomElementC(numbersE); // complier error becase type wrong

function mergeA<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}
let resultAAAA = mergeA(
    {name: 'John'},
    { jobTitle: 'FE'}
)
console.log(resultAAAA)
// Use generic to develop reusable, generalized, type-safe functions, interfaces, classess

// - Generic constraint
