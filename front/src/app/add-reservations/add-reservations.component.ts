import { Component, OnInit } from '@angular/core';
import {Members} from "../../models/members.model";
import {Salles} from "../../models/salles.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MembersService} from "../services/members.service";
import {SallesService} from "../services/salles.service";
import {EventsService} from "../services/events.services";
import {NgForm} from "@angular/forms";
import {Events} from "../../models/events.model";
import {Reservations} from "../../models/reservations.model";
import {ReservationsService} from "../services/reservations.services";

@Component({
  selector: 'app-add-reservations',
  templateUrl: './add-reservations.component.html',
  styleUrls: ['./add-reservations.component.scss']
})
export class AddReservationsComponent implements OnInit {

  members: Members[];
  salles:Salles[];

  constructor(private http: HttpClient, private router: Router, private membersService: MembersService,  private sallesService: SallesService, private reservationsService: ReservationsService ) {
    this.members=[];
    this.salles=[];
  }

  ngOnInit(){
    this.sallesService.getSalles().subscribe(salles => this.salles = salles)
    this.membersService.getMembers().subscribe(members => this.members = members)
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);

    const reservations = new Reservations(
      null,
      ngForm.form.value.nom,
      ngForm.form.value.id_salle,
      ngForm.form.value.id_membre,
      ngForm.form.value.membreList,
      ngForm.form.value.date_reserv,
    )

    this.reservationsService.addReservations(reservations).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-reservations'), 1000)
  }

}
