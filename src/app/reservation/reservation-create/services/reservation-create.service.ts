import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation, Users} from "../../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationCreateService {

  private bazeUrl = 'http://127.0.0.1:8000/rooms/reserve/';
  private usersUrl = 'http://127.0.0.1:8000/rooms/users/';
  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});

  public saveReservation(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.bazeUrl, reservation)
  }
  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl, {headers: this.httpHeaders})
  }
  constructor(private http: HttpClient) { }
}
