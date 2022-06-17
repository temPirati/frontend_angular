import { Injectable } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Rooms} from "../../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationFormsService {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  getReservationForm() {
    return this.fb.group({
      user_id: [''],
      start: [''],
      duration_hours: [''],
      duration_minutes: [''],
    });
  }
  private bazeUrl = 'http://127.0.0.1:8000/rooms/reserve/';

  public saveReservation(reservation: any): Observable<any>{
    return this.http.post<any>(this.bazeUrl, reservation)
    console.log(reservation)
  }

}
