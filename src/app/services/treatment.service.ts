import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {Treatment} from '../models/treatment.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private col:string = "treatment";

  constructor(private http:HttpClient) { }

  get (): Observable<Treatment[]> {
    return this.http.get(`${environment.host}${this.col}`)
                    .map(res=>{return res as Treatment[]});
  }

  post(pub_key: string, treatment: Treatment): Observable<boolean> {
    return this.http.post(`${environment.host}${this.col}`, {publicKey: pub_key, treatment: treatment})
                    .map(res=>{return true;})
  }
}
