// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ValidationService {

  static getValidatorErrorMessage(validatorName: string) {
    const config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address'
    };

    return config[validatorName];
  }

 static emailValidator(control) {
    //RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
        return { 'invalidEmailAddress': true };
    }
  }
}
