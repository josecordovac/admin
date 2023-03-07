import { Component } from '@angular/core';
import { TDPLocalStorageService } from '@tdp/ng-commons';
import { Router } from '@angular/router';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(
    private localStorage: TDPLocalStorageService,
    private router: Router
  ) {}

  logout() {
    this.localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
