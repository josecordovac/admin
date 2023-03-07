import { Component } from '@angular/core';
import { LoginFormReactive } from './login-form.reactive';
import { LoginDocumentErrors, LoginPasswordErrors } from './login-form-errors.enum';
import { LoaderSubjectService } from '../../../../../commons/components/loader/loader-subject.service';
import { TDPLocalStorageService } from '@tdp/ng-commons';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'tdp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [LoginFormReactive]
})
export class LoginFormComponent {
  loginDocumentErrors = LoginDocumentErrors;
  loginPasswordErrors = LoginPasswordErrors;

  showError = false;

  private exampleJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
    'eyJpc3MiOiJUZWxlZsOzbmljYSIsImlhdCI6MTU4MDQ4NDI2MSwiZXhwIjoxODk2MDE3MDYxLCJhdWQiOiIiLCJzdWIiO' +
    'iIiLCJOYW1lIjoiSm9zZSIsIkxhc3ROYW1lIjoiTmFwYSIsIkVtYWlsIjoiam5hcGFseW5AZXZlcmlzLmNvbSJ9.9SVybIU1Hq' +
    'g7swzpFvCofbAPNbxNAFS3YOjdriaysl4';

  constructor(
    public loginFormReactive: LoginFormReactive,
    private loaderSubjectService: LoaderSubjectService,
    private localStorageService: TDPLocalStorageService,
    private router: Router,
  ) {
    this.validateSession();
  }

  private validateSession() {
    if (this.localStorageService.getItem(environment.sessionKeyName)) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    if (this.loginFormReactive.loginForm.invalid) {
      this.showError = true;
      return;
    }

    this.loaderSubjectService.showLoader();

    this.localStorageService.setItem(environment.sessionKeyName, this.exampleJWT);

    this.router.navigateByUrl('/').then(() => {
      this.loaderSubjectService.closeLoader();
    });
  }
}
