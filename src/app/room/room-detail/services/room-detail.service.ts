import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Room } from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class RoomDetailService {

  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  private bazeUrl = 'http://127.0.0.1:8000/rooms/';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.bazeUrl + id, {headers: this.httpHeaders})
  }

  deleteRoom(id: number): Observable<Room> {
    console.log("room id: " + id)
    return this.http.delete<Room>(this.bazeUrl + id, {headers:this.httpHeaders})
  }

}
