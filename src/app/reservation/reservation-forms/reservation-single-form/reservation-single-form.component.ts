import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Users} from "../../../models";
import {ReservationCreateService} from "../../reservation-create/services/reservation-create.service";

@Component({
  selector: 'app-reservation-single-form',
  templateUrl: './reservation-single-form.component.html',
  styleUrls: ['./reservation-single-form.component.css']
})
export class ReservationSingleFormComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({
    user_id: new FormControl(Number, Validators.required),
    start: new FormControl('', Validators.required),
    duration_hours: new FormControl(Number, Validators.required),
    duration_minutes: new FormControl(Number, Validators.required)
  });

  users: Users[] = [];
  getUsers(): void{
    this.reservationCreateService.getUsers().subscribe(users => this.users = users)
  }

  constructor(
    private fb: FormBuilder,
    private reservationCreateService: ReservationCreateService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

}
