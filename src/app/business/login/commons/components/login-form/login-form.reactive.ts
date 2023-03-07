import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginFormReactive {

  loginForm: FormGroup;
  document: FormControl = new FormControl('', [
    Validators.nullValidator,
    Validators.required,
    Validators.pattern(/^\d+$/),
    Validators.minLength(8),
    Validators.maxLength(8)
  ]);

  password: FormControl = new FormControl('', [
    Validators.nullValidator,
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor() {
    this.loginForm = new FormGroup({
      document: this.document,
      password: this.password
    });
  }

  getError(showError: boolean, errors: Object, mapperError: Object) {
    let error = null;

    if (errors && mapperError && showError) {
      Object.keys(errors).forEach((key) => {
        if (mapperError[key]) {
          error = mapperError[key];
          return;
        }
      });
    }

    return error;
  }
}
