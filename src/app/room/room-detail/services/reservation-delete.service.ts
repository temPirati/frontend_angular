import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../../../models";
@Injectable({
  providedIn: 'root'
})
export class ReservationDeleteService {

  constructor(
    private http: HttpClient,
  ) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  private bazeUrl = 'http://127.0.0.1:8000/rooms/reservation/'

  deleteReservation(id: number): Observable<Reservation> {
    return this.http.delete<Reservation>(this.bazeUrl + id, {headers: this.httpHeaders})
  }
}
