import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../../../models";
import {environment} from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ReservationDeleteService {

  constructor(
    private http: HttpClient,
  ) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  private bazeUrl = environment.bazeUrl + 'reservation/'

  deleteReservation(id: number): Observable<Reservation> {
    return this.http.delete<Reservation>(this.bazeUrl + id, {headers: this.httpHeaders})
  }
}
