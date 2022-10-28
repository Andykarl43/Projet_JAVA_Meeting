import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Members} from "../../models/members.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MembersService} from "../services/members.service";
import {SallesService} from "../services/salles.service";
import {Salles} from "../../models/salles.model";

@Component({
  selector: 'app-add-salles',
  templateUrl: './add-salles.component.html',
  styleUrls: ['./add-salles.component.scss']
})
export class AddSallesComponent implements OnInit {


  constructor(private httpClient: HttpClient, private router: Router,  private sallesService: SallesService) {
  }

  ngOnInit(){
  }

  onSubmit(ngForms: NgForm) {
    console.log(ngForms);
    const salle = new Salles(
      null,
      ngForms.form.value.nom,
      ngForms.form.value.capacite,
      ngForms.form.value.url,
      ngForms.form.value.equipes,
    )

    this.sallesService.addSalles(salle).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-salles'), 1000)
  }

  // onSelectFile(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //
  //     // this.f['profile'].setValue(file);
  //
  //   }
  // }



}
