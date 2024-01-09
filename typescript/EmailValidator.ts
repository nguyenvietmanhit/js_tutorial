import {ValidatorA} from "./Validator";

class EmailValidatorA implements ValidatorA {

    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidatorA }
