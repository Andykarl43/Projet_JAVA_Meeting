
//events.service.ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Events} from "../../models/events.model";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  getEvents(): Observable<Events[]> {
    return this._http.get<Events[]>(`${this.url}/events`);
  }

  addEvents(events: Events): Observable<Events> {
    return this._http.post<any>(`${this.url}/events`, events);
  }

  detailsEvents(id: Number): Observable<Events>{
    return this._http.get<any>(`${this.url}/events/${id}`);
  }

  updateEvents(events: Events): Observable<Events> {
    return this._http.put<any>(`${this.url}/events`, events);
  }


  deleteEvents(id: bigint | null): Observable<any> {
    return this._http.delete(`${this.url}/events/${id}`);
  }

}
