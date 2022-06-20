import { Component, OnInit } from '@angular/core';
import { RoomDetailService } from "./services/room-detail.service";
import { ActivatedRoute, Router } from "@angular/router";
import {ReservationCreate, RoomCreate} from "../../models";
import { Location } from "@angular/common";
import {ReservationDeleteService} from "./services/reservation-delete.service";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  room = new RoomCreate();
  reservation = new ReservationCreate();

  constructor(private route: ActivatedRoute,
              private roomDetailService: RoomDetailService,
              private location: Location,
              private router: Router,
              private reservationDeleteService: ReservationDeleteService,
  ) { }

  getRoom(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roomDetailService.getRoom(id).subscribe(room => this.room = room);
  }
  goBack() {
    this.location.back();
  }

  edit = (id: number) => {

    this.router.navigate(['room/edit',id]);
  }
  delete = (id :number) => {
    console.log('delete', id)
    if(confirm("Are you sure to delete thi post")) {
      this.roomDetailService.deleteRoom(id).subscribe(room => this.room = room);
      this.router.navigate(['rooms']).then(
        window.location.reload
      );

    }
  }

  deleteReservation = (id :number) => {
    if(confirm("Jeni i sigurte per te fshire kete rezervim")) {
      this.reservationDeleteService.deleteReservation(id).subscribe(reservation =>this.reservation = reservation);
      window.location.reload();
    }
  }
  editoReservation(id:number){
    this.router.navigate(['reservation', id])
  }

  createReservations(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['room/reserve', id]);
  }


  ngOnInit(): void {
    this.getRoom();
  }

}
