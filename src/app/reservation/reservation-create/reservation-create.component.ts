import { Component, OnInit } from '@angular/core';
import {ReservationCreate, Rooms, Users} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationCreateService} from "./services/reservation-create.service";
import {Router} from "@angular/router";
import {RoomsService} from "../../room/rooms/services/rooms.service";
import {start} from "@popperjs/core";

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {

  reservation = new ReservationCreate();
  rooms: Rooms[] = [];
  users: Users[] = [];

  reservationForm = new FormGroup({
    room_id: new FormControl(Number, Validators.required),
    user_id: new FormControl(Number, Validators.required),
    start: new FormControl('', Validators.required),
    duration_hours: new FormControl(Number, Validators.required),
    duration_minutes: new FormControl(Number, Validators.required)
  })

  saveReservation(): void {
    this.reservation = this.reservationForm.value;
    console.log(this.reservation)
    this.reservationCreateService.saveReservation(this.reservation).subscribe((response: any) => {
        this.router.navigate(['room', this.reservation.room_id]).then(() => {
          window.location.reload();
        });
    },
      error => {
              if(error.status == 400){
                window.alert("E ZENE");
                this.reservationForm.reset(start);
              }
            }
      );
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms)
  }

  getUsers(): void{
    this.reservationCreateService.getUsers().subscribe(users => this.users = users)
  }


  constructor(
    private reservationCreateService: ReservationCreateService,
    private router: Router,
    private roomService: RoomsService
    ) { }

  ngOnInit(): void {
    this.getRooms();
    this.getUsers();
  }
}
