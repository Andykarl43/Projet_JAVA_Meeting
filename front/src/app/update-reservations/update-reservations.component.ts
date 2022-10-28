import { Component, OnInit } from '@angular/core';
import {Salles} from "../../models/salles.model";
import {Members} from "../../models/members.model";
import {HttpClient} from "@angular/common/http";
import {ReservationsService} from "../services/reservations.services";
import {SallesService} from "../services/salles.service";
import {MembersService} from "../services/members.service";
import {Reservations} from "../../models/reservations.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-update-reservations',
  templateUrl: './update-reservations.component.html',
  styleUrls: ['./update-reservations.component.scss']
})
export class UpdateReservationsComponent implements OnInit {

  salles:Salles[];
  members: Members[];
  reservations: Reservations[];
  reservation:any

  constructor(private http: HttpClient, private router: Router, private reservationsService: ReservationsService, private sallesService: SallesService, private membersService: MembersService, private activatedRoute: ActivatedRoute  ) {
    this.reservations=[];
    this.salles=[];
    this.members=[];
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.reservationsService.detailsReservations(Number(param.get('idReservation'))).subscribe(reservation=>{
        this.reservation=reservation;
        console.log(this.reservation)
      })
    })
    this.sallesService.getSalles().subscribe(salles => this.salles = salles)
    this.membersService.getMembers().subscribe(members => this.members = members)

  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);

    const reservations = new Reservations(
      ngForm.form.value.id,
      ngForm.form.value.nom,
      ngForm.form.value.id_salle,
      ngForm.form.value.id_membre,
      ngForm.form.value.membreList,
      ngForm.form.value.date_reserv,
    )

    this.reservationsService.updateReservations(reservations).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-reservations'), 1000)
  }

}
