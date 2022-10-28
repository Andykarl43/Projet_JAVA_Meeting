import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Members} from "../../models/members.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MembersService} from "../services/members.service";
import {User} from "../../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-update-members',
  templateUrl: './update-members.component.html',
  styleUrls: ['./update-members.component.scss']
})
export class UpdateMembersComponent implements OnInit {

  members: Members[];
  member:any
  constructor(private httpClient: HttpClient, private router: Router, private membersService: MembersService, private activatedRoute: ActivatedRoute) {
    this.members=[];
  }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.membersService.detailsMembers(Number(param.get('idMembre'))).subscribe(membre=>{
        this.member=membre;
        console.log(this.member)
      })
    })
  }


  onSubmit(ngForm: NgForm) {
    const member = new Members(
      ngForm.form.value.id,
      ngForm.form.value.nom,
      ngForm.form.value.birthday,
      ngForm.form.value.email,
    )
    // console.log(member);

    this.membersService.updateMembers(member).subscribe();
    setTimeout(() => this.router.navigateByUrl('/list-members'), 1000)

  }
}
