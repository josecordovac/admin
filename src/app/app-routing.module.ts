import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './commons/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './business/login/login.module#LoginModule'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './business/home/home.module#HomeModule'
      },
      {
        path: 'sign-up',
        loadChildren: './business/sign-up/sign-up.module#SignUpModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
