import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SallesService} from "../services/salles.service";
import {Salles} from "../../models/salles.model";
import {Reservations} from "../../models/reservations.model";
import {ReservationsService} from "../services/reservations.services";
import {Members} from "../../models/members.model";
import {MembersService} from "../services/members.service";

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss']
})
export class ListReservationsComponent implements OnInit {

  reservations: Reservations[];
  salles:Salles[];
  members: Members[];
  originalReservationsList: Reservations[];
  searchBarValue:String="";

  constructor(private http: HttpClient, private reservationsService: ReservationsService, private sallesService: SallesService, private membersService: MembersService  ) {
    this.reservations=[];
    this.salles=[];
    this.members=[];
    this.originalReservationsList=[];
  }


  ngOnInit() {
    this.reservationsService.getReservations().subscribe(reservations => {
      this.reservations = reservations
      this.originalReservationsList = reservations
    })
    this.sallesService.getSalles().subscribe(salles => this.salles = salles)
    this.membersService.getMembers().subscribe(members => this.members = members)

  }

  deleteReservations(id: bigint | null){
    this.reservationsService.deleteReservations(id).subscribe(() => this.reservations = this.reservations.filter(reservations => reservations.id !== id));
  }

  searchReservations(){
    this.reservations = this.originalReservationsList.filter((reservations)=>{
      return reservations.nom.toUpperCase().includes(this.searchBarValue.toUpperCase())
    })
  }


}
