import { Component, OnInit } from '@angular/core';
import {Members} from "../../models/members.model";
import {Router} from "@angular/router";
import {Salles} from "../../models/salles.model";
import {HttpClient} from "@angular/common/http";
import {MembersService} from "../services/members.service";
import {SallesService} from "../services/salles.service";
import {NgForm} from "@angular/forms";
import {Events} from "../../models/events.model";
import {EventsService} from "../services/events.services";

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})
export class AddEventsComponent implements OnInit {

  members: Members[];
  salles:Salles[];

  constructor(private http: HttpClient, private router: Router, private membersService: MembersService,  private sallesService: SallesService, private eventsService: EventsService ) {
    this.members=[];
    this.salles=[];
  }

  ngOnInit(){
    this.sallesService.getSalles().subscribe(salles => this.salles = salles)
    this.membersService.getMembers().subscribe(members => this.members = members)
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const events = new Events(
      null,
      ngForm.form.value.libelle,
      ngForm.form.value.id_salle,
      ngForm.form.value.id_membre,
      ngForm.form.value.date_debut,
      ngForm.form.value.date_fin,
    )

    this.eventsService.addEvents(events).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-events'), 1000)
  }

}
