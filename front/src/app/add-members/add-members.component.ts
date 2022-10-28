import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MembersService} from "../services/members.service";
import {NgForm} from "@angular/forms";
import {Members} from "../../models/members.model";

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private membersService: MembersService) {
  }

  ngOnInit(){
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const member = new Members(
      null,
      ngForm.form.value.nom,
      ngForm.form.value.birthday,
      ngForm.form.value.email,
    )

    this.membersService.addMembers(member).subscribe();
    setTimeout(()=>this.router.navigateByUrl('/list-members'), 1000)
  }

}
