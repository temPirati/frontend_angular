import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent} from "./room/rooms/rooms.component";
import {RouterModule, Routes} from "@angular/router";
import {RoomCreateComponent} from "./room/room-create/room-create.component";
import {RoomDetailComponent} from "./room/room-detail/room-detail.component";
import {RoomUpdateComponent} from "./room/room-update/room-update.component";
import {ReservationCreateComponent} from "./reservation/reservation-create/reservation-create.component";
import {ReservationUpdateComponent} from "./reservation/reservation-update/reservation-update.component";
import {FormsComponent} from "./room/forms/forms.component";
import {ReservationFormsComponent} from "./reservation/reservation-forms/reservation-forms.component";

const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component:RoomsComponent },
  { path: 'room/:id', component:RoomDetailComponent },
  { path: 'room-create', component:RoomCreateComponent },
  { path: 'rooms-create', component:FormsComponent },
  { path: 'room/edit/:id', component:RoomUpdateComponent },
  { path: 'rooms/reserve', component:ReservationCreateComponent },
  { path: 'reservation/:id', component: ReservationUpdateComponent },
  { path: 'room/reserve/:id', component: ReservationFormsComponent },
  { path: '**', redirectTo: '/rooms'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

