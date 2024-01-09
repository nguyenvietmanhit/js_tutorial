"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorA = void 0;
var EmailValidatorA = /** @class */ (function () {
    function EmailValidatorA() {
    }
    EmailValidatorA.prototype.isValid = function (s) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    };
    return EmailValidatorA;
}());
exports.EmailValidatorA = EmailValidatorA;
