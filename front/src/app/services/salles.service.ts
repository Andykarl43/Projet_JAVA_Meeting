
//salles.service.ts
import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Salles} from "../../models/salles.model";
import {Members} from "../../models/members.model";

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  getSalles(): Observable<Salles[]> {
    return this._http.get<Salles[]>(`${this.url}/salles`);
  }

  addSalles(salles: Salles): Observable<Salles> {
    return this._http.post<any>(`${this.url}/salles`, salles);
  }
  detailsSalles(id: Number): Observable<Salles>{
    return this._http.get<any>(`${this.url}/salles/${id}`);
  }

  updateSalles(salles: Salles): Observable<Salles> {
    return this._http.put<any>(`${this.url}/salles`, salles);
  }

  deleteSalles(id: bigint | null): Observable<any> {
    return this._http.delete(`${this.url}/salles/${id}`);
  }

  // uploadFile(file: File): Observable<HttpEvent<{}>> {
  //   const formdata: FormData = new FormData();
  //   formdata.append('file', file);
  //   const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
  //     reportProgress: true,
  //     responseType: 'text'
  //   });
  //
  //   return this._http.request(req);
  // }

}
