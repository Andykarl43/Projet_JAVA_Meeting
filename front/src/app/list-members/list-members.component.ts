import { Component, OnInit } from '@angular/core';
import {Members} from "../../models/members.model";
import {HttpClient} from "@angular/common/http";
import {MembersService} from "../services/members.service";

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {

  members: Members[];
  originalMembersList: Members[];
  searchBarValue:String="";

  constructor(private http: HttpClient, private membersService: MembersService ) {
    this.members=[];
    this.originalMembersList=[];
  }

  ngOnInit() {
    this.membersService.getMembers().subscribe(members => {
      this.members = members
      this.originalMembersList = members
    })
  }


  deleteMembres(id: bigint | null){
    this.membersService.deleteMembers(id).subscribe(() => this.members = this.members.filter(members => members.id !== id));
  }

  searchUser(){
    this.members = this.originalMembersList.filter((member)=>{
      return member.nom.toUpperCase().includes(this.searchBarValue.toUpperCase())
    })
  }

  // detailsMembres(id: Number){
  //   this.membersService.detailsMembers(id).subscribe(() => this.members = this.members.filter(members => members.id == id));
  // }

  connexion(){
    const membreConn=null
    //  Page de connexion, lorsque tu as trouvé le membre et qu'il est dans une var membreConn;
    localStorage.setItem('membreConnecte',JSON.stringify(membreConn))
    // Tu peux faire ta redirection...

  //  Page après le login, fais tout ce que tu veux...
  //  Pour récuperer les infos du membre:
    const membreConn2=JSON.parse(localStorage.getItem('membreConnecte')!)
  }

}
