import { Component, OnInit } from '@angular/core';
import { RoomUpdateService } from "./services/room-update.service";
import { ActivatedRoute , Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RoomCreate } from "../../models";

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  room = new RoomCreate()

  constructor(
    private postService: RoomUpdateService,
    private route: ActivatedRoute,
    private roomUpdateService: RoomUpdateService,
    private router: Router,
  ) { }

  roomUpdateForm = new FormGroup({
    title: new FormControl('', Validators.required),
    capacity: new FormControl(Number, Validators.required),
    description: new FormControl('', Validators.required),
    room_type: new FormControl('', Validators.required),
  })

  getRoomData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roomUpdateService.getRoomData(id).subscribe( ( data ) => {
      this.roomUpdateForm = new FormGroup({
        title: new FormControl(data['title']),
        capacity: new FormControl(data['capacity']),
        description: new FormControl(data['description']),
        room_type: new FormControl(data['room_type']),
        image: new FormControl(data['image'])
      })
    })
  }

  imageSrc: string = '';

  get f(){
    return this.roomUpdateForm.controls;
  }

  onChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.roomUpdateForm.patchValue({
          image: reader.result
        });

      };

    }
  }




  updateRoom(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.room = this.roomUpdateForm.value
    this.roomUpdateService.updateRoom(this.room, id).subscribe((responce: any) => {
      console.log(responce)
    });
    this.router.navigate(['room',id]);
  }


  ngOnInit(): void {
    this.getRoomData();
  }
}
