import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../../models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private bazeUrl = environment.apiUrl + 'api-auth/';

  public logIn(user: User): Observable<User>{
    return this.http.post<User>(this.bazeUrl, user)
  }


  constructor( private http: HttpClient) { }
}
