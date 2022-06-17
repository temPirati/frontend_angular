import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room, Rooms} from "../../../models";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private bazeUrl = 'http://127.0.0.1:8000/rooms/';
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

  searchSelectedRooms(term: string): Observable<Rooms[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Rooms[]>(`${this.bazeUrl}/?room_type=${term}`, {headers: this.httpHeaders})
  }
}
