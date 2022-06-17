import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation} from "../../../models";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationUpdateService {

  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  private bazeUrl = 'http://127.0.0.1:8000/rooms/reservation/'
  private DateUrl = 'http://127.0.0.1:8000/rooms/reservationdata/'

  constructor(private http: HttpClient) { }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(this.DateUrl + id, {headers: this.httpHeaders})
  }
  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return  this.http.put<Reservation>(this.bazeUrl + id, reservation);
  }
}
