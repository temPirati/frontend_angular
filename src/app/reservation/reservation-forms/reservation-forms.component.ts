import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ReservationFormsService} from "./services/reservation-forms-service";
import {Reservation} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-forms',
  templateUrl: './reservation-forms.component.html',
  styleUrls: ['./reservation-forms.component.css']
})
export class ReservationFormsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private reservationSingleForm: ReservationFormsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  reservations: any;
  reservationForm = new FormGroup({});

  get ReservationArray() {
    return (<FormArray>this.reservationForm.get('reservationArray'));
  }

  removeRoom(i: number){
    this.ReservationArray.removeAt(i);
  }
  addReservation() {
    this.ReservationArray.push(this.reservationSingleForm.getReservationForm());
  }
  onSubmit(){
    console.log(this.reservationForm.value);
    this.reservations = this.reservationForm.value
    console.log(this.reservations)
    this.reservationSingleForm.saveReservation(this.reservations).subscribe((responce: any) => {
      console.log(responce)
    })
    this.router.navigate(['room', this.reservations.room_id]);

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reservationForm = this.fb.group({
      room_id: new FormControl(id),
      reservationArray: new FormArray([])
    });
    this.addReservation();
  }

}
