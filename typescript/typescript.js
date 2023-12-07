var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var messageC;
var inputA;
inputA = 100;
inputA = 'abc';
// inputA = false; // error because incorrect type
// String literal type: use to define string literal specify, combine with union type and type alias to benefit
var clickA;
clickA = 'click'; //valid
var mouseEventA;
mouseEventA = 'click';
mouseEventA = 'dbclick';
mouseEventA = 'mouseup';
mouseEventA = 'mousedown';
var mouseEventB;
mouseEventB = 'click';
// mouseEventB = 'abc'; //invalid
// Function: use type parameter and return for clear, if function no return, use void
// If dont indicate return type, use infer type
function addF(a, b) {
    return a + b;
}
var sumF = addF(1, 5);
function echoA(message) {
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
var addG = function (x, y) {
    return x + y;
};
//compile error because param incompatible
// addG = function (x: string, y: string): number {
//     return x.concat(y).length
// }
// Optional Parameter: use question mark ? to optional parameter
// Optional parameter must appear after required parameter
function abc(a) {
    if (a === void 0) { a = ''; }
    console.log(a);
}
abc();
function multiplyB(a, b, c) {
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
function applyDiscountA(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscountA(100));
function applyDiscountB(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscountB(100)); //95
// compile error when use default parameter in function type definition
// let promotionA: (price: number, discount: number = 0.05) => number;
// Default parameter is optional, can omit when call function
// Optional parameter must be after required parameters, but default parameter is not
// When use default parameter before required parameter, must set undefined for default parameter
function getDayA(year, month) {
    if (year === void 0) { year = new Date().getFullYear(); }
    var day = 0;
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
var dayA = getDayA(2019, 2);
console.log(dayA);
var dayB = getDayA(undefined, 2);
console.log(dayB);
// Rest Parameters: represent list indefinite number of arguments as an array
// Has array type
// Must be last in parameter list
// Only one rest parameter in parameter list
function getTotalA(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotalA(1, 2, 3, 4));
// Function Overloading: use to describe clearly more than use union type, relationship between parameter types and the results of a function
function addNumbersA(a, b) {
    return a + b;
}
function addStringsA(a, b) {
    return a + b;
}
function addH(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}
function addM(a, b) {
    return a + b;
}
console.log(addM(1, 2));
function sumM(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
// method overloading: same as function overloading
var CounterM = /** @class */ (function () {
    function CounterM() {
        this.current = 0;
    }
    CounterM.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return CounterM;
}());
var counterM = new CounterM();
console.log(counterM.count());
console.log(counterM.count(20));
// Class
// ES5 use constructor function or prototype inheritance to create a 'class'
// ES5 use constructor function
function PersonA(ssn, firstName, lastName) {
    // console.log(this)
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
console.log(typeof PersonA);
PersonA.prototype.getFullname = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
};
var personAA = new PersonA('123', 'viet', 'manh');
console.log(personAA);
console.log(typeof personAA);
console.log(personAA.getFullname());
// ES6
var PersonBB = /** @class */ (function () {
    function PersonBB(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonBB.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonBB;
}());
var personBB = new PersonBB('123', 'manh', 'nguyenviet');
console.log(personBB.getFullname());
// TS add type annotation to class
var PersonCC = /** @class */ (function () {
    function PersonCC(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonCC.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonCC;
}());
var personCC = new PersonCC('dasdsa', 'john', 'doe');
console.log(personCC.getFullName());
// TS use ES6 class syntax and type to powerful
// Access Modifier: private, public, protected, used in class
// private: access inner class
// protected: access inner class and subclass inheritance from it
// public: access everywhere
// Default is public if dont specify modifier
// TS control logic access at the compile time
var PersonDD = /** @class */ (function () {
    function PersonDD(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonDD.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonDD;
}());
var personDD = new PersonDD('1212', 'manh', 'nguyenvietmanh');
// console.log(personDD.ssn); //compile error because access private modifier
// readonly: use to mark immutable property in class
var PersonEE = /** @class */ (function () {
    function PersonEE(birthDate) {
        this.birthDate = birthDate;
    }
    return PersonEE;
}());
var personEe = new PersonEE(new Date(1990, 12, 25));
//
// personEe.birthDate = 'sdsa'; // compile error because birthDate is readonly
// combine declare and initialize
var PersonFF = /** @class */ (function () {
    function PersonFF(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
    return PersonFF;
}());
// Diff readonly vs const: readonly use in property class, const use in variable
// readonly use in the declaration or constructor class, const use in the declaration
// Getter and Setter
var PersonF = /** @class */ (function () {
    function PersonF() {
    }
    return PersonF;
}());
var personF = new PersonF();
personF.age = 5;
// Add validate
// use validate in public is redundant and tedious, instead of use getter and setter to check
// getter = accessor, setter = mutator
// Step:
// Change visibility from public -> private
// Change property to prefix _
// Define get and set function, notice set function must be param, check validate in set function
var PersonJ = /** @class */ (function () {
    function PersonJ() {
    }
    Object.defineProperty(PersonJ.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    PersonJ.prototype.getFullname = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return PersonJ;
}());
var personJ = new PersonJ();
personJ.age = 10; // auto call setter
console.log(personJ.age); //auto call getter
//
var PersonK = /** @class */ (function () {
    function PersonK() {
    }
    Object.defineProperty(PersonK.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 20) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonK.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error('Invalid first name');
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonK.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLastName) {
            if (!theLastName) {
                throw new Error('Invalid last name');
            }
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    PersonK.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonK;
}());
var personK = new PersonK();
personK.age = 10;
personK.firstName = 'manh';
personK.lastName = 'nguyen viet';
console.log(personK.getFullname());
var PersonL = /** @class */ (function () {
    function PersonL() {
    }
    Object.defineProperty(PersonL.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonL.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLastName) {
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonL.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        set: function (name) {
            console.log(name);
            var parts = name.split(' ');
            if (parts.length != 2) {
                throw new Error('Invalid name format: first last');
            }
            this.firstName = parts[0];
            this.lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    return PersonL;
}());
var personL = new PersonL();
personL.fullName = 'nguyen viet';
console.log(personL.fullName);
// Inheritance
// JS use prototype inheritance, not classical inheritance like C or Java.
// From ES6 use class for sugar syntax
// - Use extend keyword for inheritance
// - Use super() at child class to call constructor or super.method() to call method in parent class
var PersonM = /** @class */ (function () {
    function PersonM(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonM.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    PersonM.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonM;
}());
var EmployeeM = /** @class */ (function (_super) {
    __extends(EmployeeM, _super);
    function EmployeeM(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    // override method
    EmployeeM.prototype.describe = function () {
        return _super.prototype.describe.call(this) + "I'm a ".concat(this.jobTitle);
    };
    return EmployeeM;
}(PersonM));
var employeeM = new EmployeeM('manh', 'viet', 'BE');
console.log(employeeM.getFullName());
console.log(employeeM.describe());
// static method and property

var EmployeeN = /** @class */ (function () {
    function EmployeeN(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        EmployeeN.headcount++;
    }
    EmployeeN.headcount = 0;
    return EmployeeN;
}());
var employeeN1 = new EmployeeN('1', '2', '3');
var employeeN2 = new EmployeeN('1', '2', '3');
console.log(EmployeeN.headcount);
// static methods
var EmployeeO = /** @class */ (function () {
    function EmployeeO(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        EmployeeO.headcount++;
    }
    EmployeeO.getHeadcount = function () {
        return EmployeeO.headcount;
    };
    EmployeeO.headcount = 0;
    return EmployeeO;
}());
var employeeO1 = new EmployeeO('1', '2', '3');
var employeeO2 = new EmployeeO('1', '2', '3');
console.log(EmployeeO.getHeadcount());
