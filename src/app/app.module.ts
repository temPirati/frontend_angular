import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { ReservationCreateComponent } from './reservation/reservation-create/reservation-create.component';
import { ReservationUpdateComponent } from './reservation/reservation-update/reservation-update.component';
import { SearchComponent } from './room/search/search.component';
import { FormsComponent } from './room/forms/forms.component';
import { FieldsComponent } from './room/forms/fields/fields.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { ReservationFormsComponent } from './reservation/reservation-forms/reservation-forms.component';
import { ReservationSingleFormComponent } from './reservation/reservation-forms/reservation-single-form/reservation-single-form.component';
import {UserModule} from "./user/user.module";


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomCreateComponent,
    RoomDetailComponent,
    RoomUpdateComponent,
    ReservationCreateComponent,
    ReservationUpdateComponent,
    SearchComponent,
    FormsComponent,
    FieldsComponent,
    ReservationFormsComponent,
    ReservationSingleFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        UserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
