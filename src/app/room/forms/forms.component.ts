import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SingleFormService} from "./services/single-form.service";
import {Rooms} from "../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(
    private formService: SingleFormService,
    private fb : FormBuilder,
    private router: Router
  ) { }
  rooms: Rooms[]= []
  roomForm = new FormGroup({});

  get RoomsArray() {
    return (<FormArray>this.roomForm.get('roomArray'));
  }

  removeRoom(i: number){
    this.RoomsArray.removeAt(i);
  }
  addRoom() {
    this.RoomsArray.push(this.formService.getRoomForm());
  }

  onSubmit() {
    console.log(this.roomForm.value);
    this.rooms = this.roomForm.value
    this.formService.saveRooms(this.rooms).subscribe((responce: any) => {
      console.log(responce)
    })
    this.router.navigate(['rooms']).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.roomForm = this.fb.group({
      roomArray: new FormArray([])
    });
    this.addRoom();
  }
}
