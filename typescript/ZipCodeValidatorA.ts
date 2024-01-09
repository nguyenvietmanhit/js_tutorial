import {ValidatorA} from "./Validator";

class ZipCodeValidatorA implements ValidatorA {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidatorA }
