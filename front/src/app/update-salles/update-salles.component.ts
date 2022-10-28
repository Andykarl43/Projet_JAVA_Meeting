import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Salles} from "../../models/salles.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MembersService} from "../services/members.service";
import {EventsService} from "../services/events.services";
import {SallesService} from "../services/salles.service";
import {ReservationsService} from "../services/reservations.services";

@Component({
  selector: 'app-update-salles',
  templateUrl: './update-salles.component.html',
  styleUrls: ['./update-salles.component.scss']
})
export class UpdateSallesComponent implements OnInit {
  salles:Salles[];
  salle:any

  constructor(private httpClient: HttpClient,private activatedRoute: ActivatedRoute, private router: Router, private sallesService: SallesService ) {
    this.salles=[];
  }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.sallesService.detailsSalles(Number(param.get('idSalle'))).subscribe(salle=>{
        this.salle=salle;
        console.log(this.salle)
      })
    })
  }

  onSubmit(ngForms: NgForm) {
    console.log(ngForms);
    const salle = new Salles(
      ngForms.form.value.id,
      ngForms.form.value.nom,
      ngForms.form.value.capacite,
      ngForms.form.value.url,
      ngForms.form.value.equipes,
    )

    this.sallesService.updateSalles(salle).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-salles'), 1000)
  }
}
