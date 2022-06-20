import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation} from "../../../models";
import { Observable, of } from 'rxjs';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationUpdateService {

  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  private bazeUrl = environment.bazeUrl + 'reservation/'
  private DateUrl = environment.bazeUrl + 'reservationdata/'

  constructor(private http: HttpClient) { }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(this.DateUrl + id, {headers: this.httpHeaders})
  }
  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return  this.http.put<Reservation>(this.bazeUrl + id, reservation);
  }
}
