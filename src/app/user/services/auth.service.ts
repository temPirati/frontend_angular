import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../../models";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl + 'api-auth/login/';
  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});

  constructor(
    private http: HttpClient,
  ) { }

  userLogIn(user: User): Observable<User>{
    return this.http.post<User>(this.url, user, {headers: this.httpHeaders})
  }
}
