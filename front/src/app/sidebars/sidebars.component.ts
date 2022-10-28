import { Component, OnInit } from '@angular/core';
import {Reservations} from "../../models/reservations.model";
import {Salles} from "../../models/salles.model";
import {Members} from "../../models/members.model";
import {HttpClient} from "@angular/common/http";
import {ReservationsService} from "../services/reservations.services";
import {SallesService} from "../services/salles.service";
import {MembersService} from "../services/members.service";
import {Events} from "../../models/events.model";
import {EventsService} from "../services/events.services";

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.scss']
})
export class SidebarsComponent implements OnInit {

  reservations: Reservations[];
  salles:Salles[];
  members: Members[];
  events:Events[];

  constructor(private http: HttpClient, private eventsService: EventsService, private reservationsService: ReservationsService, private sallesService: SallesService, private membersService: MembersService  ) {
    this.reservations=[];
    this.salles=[];
    this.members=[];
    this.events=[];
  }

  ngOnInit() {
    this.reservationsService.getReservations().subscribe(reservations => {
      this.reservations = reservations
    })
    this.sallesService.getSalles().subscribe(salles => this.salles = salles)
    this.membersService.getMembers().subscribe(members => this.members = members)
    this.eventsService.getEvents().subscribe(events => {
      this.events = events
    })
  }
}
