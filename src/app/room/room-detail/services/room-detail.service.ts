import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Room } from "../../../models";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomDetailService {

  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  private bazeUrl = environment.bazeUrl;

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.bazeUrl + id, {headers: this.httpHeaders})
  }

  deleteRoom(id: number): Observable<Room> {
    return this.http.delete<Room>(this.bazeUrl + id, {headers:this.httpHeaders})
  }

}
