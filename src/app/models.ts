export interface Reservation{
  "id": number;
  "room_id": number;
  "user_id": number;
  "start": string;
  "end": string;
  "duration_hours": number;
  "duration_minutes": number;
}
export class RoomCreate implements Room{
  "id": number;
  "title": string;
  "capacity": number;
  "reservations": Reservation[];
  "description": string;
  "room_type": string;
  "image": any
}
export interface Room{
  "id": number;
  "title": string;
  "capacity": number;
  "reservations": Reservation[];
  "description": string;
  "room_type": string;
  "image": any;
}


export class ReservationCreate implements Reservation{
  "id": number;
  "room_id": number;
  "user_id": number;
  "start": string;
  "end": string;
  "duration_hours": number;
  "duration_minutes": number;
}
export interface  Rooms{
  "id": number;
  "title": string;
  "capacity": number;
  "description": string;
  "room_type": string;
  "image": string;
}

export interface Users{
  "id": number;
  "username": string;
}

export interface User{
  "id": number;
  "username": string;
  "first_name": string;
  "email": string;
  "password": string;
}
export class UserCreate implements User{
  "id": number;
  "username": string;
  "first_name": string;
  "email": string;
  "password": string;
}
