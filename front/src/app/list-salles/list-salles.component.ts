import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Salles} from "../../models/salles.model";
import {SallesService} from "../services/salles.service";
import {Members} from "../../models/members.model";

@Component({
  selector: 'app-list-salles',
  templateUrl: './list-salles.component.html',
  styleUrls: ['./list-salles.component.scss']
})
export class ListSallesComponent implements OnInit {

  salles:Salles[];
  originalSallesList: Salles[];
  searchBarValue:String="";

  constructor(private http: HttpClient, private sallesService: SallesService ) {
    this.salles=[];
    this.originalSallesList=[];
  }

  ngOnInit() {
    this.sallesService.getSalles().subscribe(salles => {
      this.salles = salles
      this.originalSallesList = salles
    })
  }

  deleteSalles(id: bigint | null){
    this.sallesService.deleteSalles(id).subscribe(() => this.salles = this.salles.filter(salles => salles.id !== id));
  }

  searchSalles(){
    this.salles = this.originalSallesList.filter((salle)=>{
      return salle.nom.toUpperCase().includes(this.searchBarValue.toUpperCase())
    })
  }

}
