import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { RoomsService} from "./services/rooms.service";
import { RoomCreate, Rooms} from "../../models";
import { Router } from "@angular/router";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Rooms[] = []
  room = new RoomCreate()
  constructor(
    private roomService: RoomsService,
    private router: Router,

  ) { }

  getRooms(): void {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms)
  }

  getRoom = (id :number) => {
    console.log(id);
    this.router.navigate(['room',id]);
  }

  ngOnInit(): void {
    this.getRooms();
  }

  searchText: string = "";

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    this.roomService.searchRooms(this.searchText)
  }

  selectText: string = "";

  onSelectOption(selectValue: any){
    this.selectText = selectValue.target.value;
    this.roomService.searchSelectedRooms(this.searchText)
  }

}
