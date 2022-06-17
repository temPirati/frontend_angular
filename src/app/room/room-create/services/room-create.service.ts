import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class RoomCreateService {

  constructor(private http: HttpClient) { }

  private bazeUrl = 'http://127.0.0.1:8000/rooms/create/';
  httpHeaders = new HttpHeaders({'Content-Type': 'multipart/form-data; boundary=???', 'Accept': 'application/json'});
  httpHeadersJson = new HttpHeaders({'Content-Type': 'aplication/json'});

  public saveRoom(room: Room): Observable<Room>{
    console.log(room)
    return this.http.post<Room>(this.bazeUrl, room)
  }

  // public upload(formData: FormData) {
  //   return this.http.post<any>(this.bazeUrl, formData, {headers: this.httpHeaders});
  // }
}
