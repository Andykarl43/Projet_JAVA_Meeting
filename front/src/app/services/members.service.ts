
//member.service.ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Members} from "../../models/members.model";

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  getMembers(): Observable<Members[]> {
    return this._http.get<Members[]>(`${this.url}/members`);
  }

  addMembers(members: Members): Observable<Members> {
    return this._http.post<any>(`${this.url}/members`, members);
  }

  detailsMembers(id: Number): Observable<Members>{
     return this._http.get<any>(`${this.url}/members/${id}`);
   }

   updateMembers(members: Members): Observable<Members> {
     return this._http.put<any>(`${this.url}/members`, members);
  }


  deleteMembers(id: bigint | null): Observable<any> {
    return this._http.delete(`${this.url}/members/${id}`);
  }

}
