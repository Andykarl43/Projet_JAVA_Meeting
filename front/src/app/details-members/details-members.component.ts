import { Component, OnInit } from '@angular/core';
import {Members} from "../../models/members.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MembersService} from "../services/members.service";
import {Events} from "../../models/events.model";
import {EventsService} from "../services/events.services";
import {SallesService} from "../services/salles.service";
import {Salles} from "../../models/salles.model";
import {Reservations} from "../../models/reservations.model";
import {ReservationsService} from "../services/reservations.services";

@Component({
  selector: 'app-details-members',
  templateUrl: './details-members.component.html',
  styleUrls: ['./details-members.component.scss']
})
export class DetailsMembersComponent implements OnInit {

  events:Events[];
  members: Members[];
  salles:Salles[];
  reservations: Reservations[];
  member:any
  constructor(private httpClient: HttpClient, private router: Router, private membersService: MembersService, private activatedRoute: ActivatedRoute, private eventsService: EventsService, private sallesService: SallesService, private reservationsService: ReservationsService ) {
    this.members=[];
    this.events=[];
    this.salles=[];
    this.reservations=[];
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.membersService.detailsMembers(Number(param.get('idMembre'))).subscribe(membre=>{
        this.member=membre;
        console.log(this.member)
      })
    })
    this.sallesService.getSalles().subscribe(salles => this.salles = salles)
    this.eventsService.getEvents().subscribe(events => this.events = events)
    this.reservationsService.getReservations().subscribe(reservations => this.reservations = reservations)
 }


}
