import { Component, OnInit } from '@angular/core';
import {UserCreate} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserAuthService} from "../services/user-auth.service";
import {Route} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private userAuthService: UserAuthService,
    private router: Route,
    ) { }

  ngOnInit(): void {
  }
  user = new UserCreate();

  singInForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  })

  onSubmit(){
    this.user = this.singInForm.value
    this.userAuthService.logIn(this.user).subscribe( (responce: any) =>{
    console.log(responce)});
    // this.router.navigate(['rooms'])
  }
}
