import {Component, OnInit} from '@angular/core';
import { RoomCreateService } from "./services/room-create.service";
import { RoomCreate} from "../../models";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { Router} from "@angular/router";


@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  room = new RoomCreate();
  imageSrc: string = '';

  roomForm = new FormGroup({
    title: new FormControl('', Validators.required),
    capacity: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    room_type: new FormControl('', Validators.required),
    image: new FormControl(''),
  })


  saveRoom(): void{
    this.room = this.roomForm.value;
    this.roomCreateService.saveRoom(this.room).subscribe((response: any) => {
      console.log(response);
    });
    this.router.navigate(['rooms']).then(() => {
      window.location.reload();
    });
  }


  get f(){
    return this.roomForm.controls;
  }

  onChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      this.f['image'].updateValueAndValidity()

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.roomForm.patchValue({
          image: reader.result
        });

      };

    }
  }

  constructor(private roomCreateService: RoomCreateService, private router: Router) { }

  ngOnInit(): void {
  }

}
