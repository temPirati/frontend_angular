import { Component, OnInit } from '@angular/core';
import {ReservationCreate, Rooms, Users} from "../../models";
import {ReservationUpdateService} from "./services/reservation-update.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationCreateService} from "../reservation-create/services/reservation-create.service";
import {RoomsService} from "../../room/rooms/services/rooms.service";
import * as moment from 'moment';


@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  reservation = new ReservationCreate()
  rooms: Rooms[] = [];
  users: Users[] = [];

  constructor(
    private reservationUpdateService: ReservationUpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private reservationCreateService: ReservationCreateService,
    private roomService: RoomsService,
    ) { }

  rezervationForm = new FormGroup({
    room_id: new FormControl(Number, Validators.required),
    user_id: new FormControl(Number, Validators.required),
    start: new FormControl(Date, Validators.required),
    duration_hours: new FormControl(Number, Validators.required),
    duration_minutes: new FormControl(Number, Validators.required)
  })


  getReservation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reservationUpdateService.getReservation(id).subscribe( ( data ) => {
      const date = moment.utc(new Date(data['start'])).format('yyyy-MM-DDThh:mm')
      console.log(date)
      this.rezervationForm = new FormGroup({
        room_id: new FormControl(data['room_id']),
        user_id: new FormControl(data['user_id']),
        start: new FormControl(date),
        duration_hours: new FormControl(data['duration_hours']),
        duration_minutes: new FormControl(data['duration_minutes']),
        })
      })
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms)
  }

  getUsers(): void{
    this.reservationCreateService.getUsers().subscribe(users => this.users = users)
  }


  updateReservation(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reservation = this.rezervationForm.value;
    this.reservationUpdateService.updateReservation(id, this.reservation).subscribe((responce: any) => {
      console.log(responce);
      this.router.navigate(['room', this.reservation.room_id]).then(
        window.location.reload
      );
    },
      error => {
        if(error.status == 400){
          window.alert("E ZENE");
        }
      });

  }
  ngOnInit(): void {
    this.getReservation();
    this.getUsers();
    this.getRooms();
  }

}
