import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {UserLoginComponent} from "./user-login/user-login.component";

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
