
//reservation.service.ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Reservations} from "../../models/reservations.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  getReservations(): Observable<Reservations[]> {
    return this._http.get<Reservations[]>(`${this.url}/reservations`);
  }

  addReservations(reservations: Reservations): Observable<Reservations> {
    return this._http.post<any>(`${this.url}/reservations`, reservations);
  }

  detailsReservations(id: Number): Observable<Reservations>{
    return this._http.get<any>(`${this.url}/reservations/${id}`);
  }

  updateReservations(reservations: Reservations): Observable<Reservations> {
    return this._http.put<any>(`${this.url}/reservations`, reservations);
  }


  deleteReservations(id: bigint | null): Observable<any> {
    return this._http.delete(`${this.url}/reservations/${id}`);
  }

}
