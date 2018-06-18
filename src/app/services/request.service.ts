import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {RequestForm} from '../models/requestForm.model';
import {Result} from '../models/result.model';
import {StateService} from './state.service';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private col:string = "request";

  constructor(private http:HttpClient,
              private stateService:StateService) { }

  get(): Observable<RequestForm[]> {
    return this.http.get(`${environment.host}${this.col}`)
                    .map(res=>{return res as RequestForm[]});
  }

  post(pubKey: string, form: RequestForm): Observable<boolean> {

    form.id = uuid();
    form.date = new Date();

    let reciever = Object.assign({}, form) as RequestForm;
    let sender = Object.assign({}, form) as RequestForm;

    reciever.publicKey = this.stateService.user.publicKey;
    reciever.name = this.stateService.user.name;

    let req1 = this.http.post(`${environment.host}${this.col}`, {publicKey: sender.publicKey, request: reciever});
    let req2 = this.http.post(`${environment.host}${this.col}`, {publicKey: reciever.publicKey, request: sender});

    return req1.concatMap(res => req2).map(res => true);
  }

  put(pubKey: string, requestId:string, result:Result): Observable<boolean> {
    return this.http.post(`${environment.host}${this.col}`, {publicKey: pubKey, requestId:requestId, result: result})
                    .map(res=>{return true;})
  }
}
