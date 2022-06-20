import {Injectable} from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../../models";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomCreateService {

  constructor(private http: HttpClient) { }

  private bazeUrl = environment.bazeUrl + 'create/';

  public saveRoom(room: Room): Observable<Room>{
    console.log(room)
    return this.http.post<Room>(this.bazeUrl, room)
  }
}
