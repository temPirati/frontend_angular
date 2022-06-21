import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
