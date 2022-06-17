import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Room} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class RoomUpdateService {
  private bazeUrl = 'http://127.0.0.1:8000/rooms/';
  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  constructor(
    private http: HttpClient,
  ) { }
  getRoomData(id: number): Observable<Room> {
    return this.http.get<Room>(this.bazeUrl + id, {headers: this.httpHeaders})
  }
  updateRoom(room: Room, id: number): Observable<Room> {
    return this.http.put<Room>(this.bazeUrl + id, room);
  }
}
