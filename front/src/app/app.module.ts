import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {FormsModule} from "@angular/forms";
import { MainsComponent } from './mains/mains.component';
import { ScriptxComponent } from './scriptx/scriptx.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { AdddMembersComponent } from './addd-members/addd-members.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { UpdateMembersComponent } from './update-members/update-members.component';
import { DetailsMembersComponent } from './details-members/details-members.component';
import { ListSallesComponent } from './list-salles/list-salles.component';
import { AddSallesComponent } from './add-salles/add-salles.component';
import { DetailsSallesComponent } from './details-salles/details-salles.component';
import { UpdateSallesComponent } from './update-salles/update-salles.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { AddReservationsComponent } from './add-reservations/add-reservations.component';
import { UpdateReservationsComponent } from './update-reservations/update-reservations.component';
import { DetailsReservationsComponent } from './details-reservations/details-reservations.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { UpdateEventsComponent } from './update-events/update-events.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUsersComponent,
    MainsComponent,
    ScriptxComponent,
    ListMembersComponent,
    SidebarsComponent,
    AdddMembersComponent,
    AddMembersComponent,
    UpdateMembersComponent,
    DetailsMembersComponent,
    ListSallesComponent,
    AddSallesComponent,
    DetailsSallesComponent,
    UpdateSallesComponent,
    ListReservationsComponent,
    AddReservationsComponent,
    UpdateReservationsComponent,
    DetailsReservationsComponent,
    ListEventsComponent,
    AddEventsComponent,
    UpdateEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
