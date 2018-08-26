import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeRoutingModule } from './home-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputTextModule,
    CardModule
  ],
  declarations: [LoginComponent, RegistrationComponent]
})
export class HomeModule { }
