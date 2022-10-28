import { Component, OnInit } from '@angular/core';
import {Salles} from "../../models/salles.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MembersService} from "../services/members.service";
import {EventsService} from "../services/events.services";
import {SallesService} from "../services/salles.service";
import {ReservationsService} from "../services/reservations.services";
import {Events} from "../../models/events.model";
import {Members} from "../../models/members.model";
import {Reservations} from "../../models/reservations.model";

@Component({
  selector: 'app-details-salles',
  templateUrl: './details-salles.component.html',
  styleUrls: ['./details-salles.component.scss']
})
export class DetailsSallesComponent implements OnInit {

  events:Events[];
  members: Members[];
  salles:Salles[];
  reservations: Reservations[];
  salle:any
  constructor(private httpClient: HttpClient, private router: Router, private membersService: MembersService, private activatedRoute: ActivatedRoute, private eventsService: EventsService, private sallesService: SallesService, private reservationsService: ReservationsService ) {
    this.members=[];
    this.events=[];
    this.salles=[];
    this.reservations=[];
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.sallesService.detailsSalles(Number(param.get('idSalle'))).subscribe(salle=>{
        this.salle=salle;
        console.log(this.salle)
      })
    })
    this.membersService.getMembers().subscribe(members => this.members = members)
    this.eventsService.getEvents().subscribe(events => this.events = events)
    this.reservationsService.getReservations().subscribe(reservations => this.reservations = reservations)

  }

}
