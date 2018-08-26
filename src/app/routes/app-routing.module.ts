import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../modules/home/login/login.component';
import { RegistrationComponent } from '../modules/home/registration/registration.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumbs: 'Login'
    }
  },
  {
    path: 'register',
    component: RegistrationComponent,
    data: {
      breadcrumbs: 'User Registration'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      breadcrumbs: '404 - Page Not Found'
    }
  },
  // { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
