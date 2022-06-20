import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation, Users} from "../../../models";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationCreateService {

  private bazeUrl = environment.bazeUrl + 'reserve/';
  private usersUrl = environment.bazeUrl + 'users/';
  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});

  public saveReservation(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.bazeUrl, reservation)
  }
  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl, {headers: this.httpHeaders})
  }
  constructor(private http: HttpClient) { }
}
