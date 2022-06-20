import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room, Rooms} from "../../../models";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private bazeUrl = environment.bazeUrl;
  httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});

  constructor(private http: HttpClient) {
  }

  getRooms(): Observable<Rooms[]> {
    return this.http.get<Rooms[]>(this.bazeUrl, {headers: this.httpHeaders})
  }

  searchRooms(term: string): Observable<Rooms[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Rooms[]>(`${this.bazeUrl}/?title=${term}`, {headers: this.httpHeaders})
  }
}
