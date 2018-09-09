import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KrunalujwalRoutingModule } from './/krunalujwal-routing.module';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridTabsComponent } from './grid-tabs/grid-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    KrunalujwalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    ToastModule
  ],
  declarations: [
    UsersComponent,
    DashboardComponent,
    GridTabsComponent
  ],
  providers: [MessageService]
})
export class KrunalujwalModule { }
