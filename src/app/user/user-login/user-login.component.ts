import { Component, OnInit } from '@angular/core';
import {UserCreate} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  user = new UserCreate()

  logInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){
    this.user = this.logInForm.value
    console.log(this.user)
    this.authService.userLogIn(this.user).subscribe( (responce: any) =>
    console.log(responce))
  }

  ngOnInit(): void {
  }

}
