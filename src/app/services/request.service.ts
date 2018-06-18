import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {RequestForm} from '../models/requestForm.model';
import {Result} from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private col:string = "request";

  constructor(private http:HttpClient) { }

  get(): Observable<RequestForm[]> {
    return this.http.get(`${environment.host}${this.col}`)
                    .map(res=>{return res as RequestForm[]});
  }

  post(pubKey: string, form: RequestForm): Observable<boolean> {
    return this.http.post(`${environment.host}${this.col}`, {publicKey: pubKey, request: form})
                    .map(res=>{return true;})
  }

  put(pubKey: string, requestId:string, result:Result): Observable<boolean> {
    return this.http.post(`${environment.host}${this.col}`, {publicKey: pubKey, requestId:requestId, result: result})
                    .map(res=>{return true;})
  }
}
