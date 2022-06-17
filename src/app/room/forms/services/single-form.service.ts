import { Injectable } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Rooms } from "../../../models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SingleFormService {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }
  getRoomForm() {
    return this.fb.group({
      title: [''],
      capacity: [],
      description: [''],
      room_type: [''],
      image: [''],
    });
  }

  private bazeUrl = 'http://127.0.0.1:8000/rooms/';

  public saveRooms(rooms: Rooms[]): Observable<Rooms[]>{
    return this.http.post<Rooms[]>(this.bazeUrl, rooms)
  }
}
