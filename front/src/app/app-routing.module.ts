import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {ListMembersComponent} from "./list-members/list-members.component";
import {SidebarsComponent} from "./sidebars/sidebars.component";
import {AddMembersComponent} from "./add-members/add-members.component";
import {UpdateMembersComponent} from "./update-members/update-members.component";
import {DetailsMembersComponent} from "./details-members/details-members.component";
import {ListSallesComponent} from "./list-salles/list-salles.component";
import {AddSallesComponent} from "./add-salles/add-salles.component";
import {DetailsSallesComponent} from "./details-salles/details-salles.component";
import {ListReservationsComponent} from "./list-reservations/list-reservations.component";
import {AddReservationsComponent} from "./add-reservations/add-reservations.component";
import {UpdateReservationsComponent} from "./update-reservations/update-reservations.component";
import {ListEventsComponent} from "./list-events/list-events.component";
import {AddEventsComponent} from "./add-events/add-events.component";
import {UpdateEventsComponent} from "./update-events/update-events.component";
import {DashboardsComponent} from "./dashboards/dashboards.component";
import {AppComponent} from "./app.component";
import {UpdateSallesComponent} from "./update-salles/update-salles.component";

const routes: Routes = [
  {path:'', component: SidebarsComponent},
  {path:'add-user', component: AddUserComponent},
  {path:'list-members', component: ListMembersComponent},
  {path:'add-members', component: AddMembersComponent},
  {path:'update-members/:idMembre', component: UpdateMembersComponent},
  {path:'details-members/:idMembre', component: DetailsMembersComponent},
  {path:'list-salles', component: ListSallesComponent},
  {path:'add-salles', component: AddSallesComponent},
  {path:'details-salles/:idSalle', component: DetailsSallesComponent},
  {path:'list-reservations', component: ListReservationsComponent},
  {path:'add-reservations', component: AddReservationsComponent},
  {path:'update-reservations/:idReservation', component: UpdateReservationsComponent},
  {path:'list-events', component: ListEventsComponent},
  {path:'add-events', component: AddEventsComponent},
  {path:'update-events/:idEvent', component: UpdateEventsComponent},
  {path:'update-salles/:idSalle', component: UpdateSallesComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
