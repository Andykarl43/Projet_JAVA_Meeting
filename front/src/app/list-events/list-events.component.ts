import { Component, OnInit } from '@angular/core';
import {Salles} from "../../models/salles.model";
import {HttpClient} from "@angular/common/http";
import {SallesService} from "../services/salles.service";
import {Events} from "../../models/events.model";
import {EventsService} from "../services/events.services";
import {Members} from "../../models/members.model";
import {MembersService} from "../services/members.service";


@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  events:Events[];
  members: Members[];
  originalEventsList: Events[];
  searchBarValue:String="";
  salles:Salles[];

  constructor(private http: HttpClient, private eventsService: EventsService, private sallesService: SallesService, private membersService: MembersService   ) {
    this.events=[];
    this.salles=[];
    this.members=[];
    this.originalEventsList=[];
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events
      this.originalEventsList = events
    })
    this.sallesService.getSalles().subscribe(salles => this.salles = salles)
    this.membersService.getMembers().subscribe(members => this.members = members)
    console.log(this.members)
  }

  deleteEvents(id: bigint | null){
    this.eventsService.deleteEvents(id).subscribe(() => this.events = this.events.filter(events => events.id !== id));
  }

  searchEvents(){
    this.events = this.originalEventsList.filter((events)=>{
      return events.libelle.toUpperCase().includes(this.searchBarValue.toUpperCase())
    })
  }

}
