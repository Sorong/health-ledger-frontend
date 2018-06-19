import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {Request} from '../models/request.model';
import {Result} from '../models/result.model';
import {StateService} from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private col:string = "request";

  constructor(private http:HttpClient,
              private stateService:StateService) { }

  get(): Observable<Request[]> {
    return this.http.get(`${environment.host}${this.col}`)
                    .map(res=>{return res as Request[]});
  }

  post(pubKey: string, request: Request): Observable<boolean> {

    let reciever = Object.assign({}, request) as Request;
    let sender = Object.assign({}, request) as Request;

    reciever.publicKey = this.stateService.user.publicKey;
    reciever.name = this.stateService.user.name;

    let req1 = this.http.post(`${environment.host}${this.col}`, {publicKey: sender.publicKey, request: reciever});
    let req2 = this.http.post(`${environment.host}${this.col}`, {publicKey: reciever.publicKey, request: sender});

    return req1.concatMap(res => req2).map(res => true);
  }

  put(pubKey: string, requestId:string, result:Result): Observable<boolean> {

    let reciever = Object.assign({}, result) as Result;
    let sender = Object.assign({}, result) as Result;


    let req1 = this.http.put(`${environment.host}${this.col}`, {publicKey: pubKey, requestId:requestId, result: reciever});
    let req2 = this.http.put(`${environment.host}${this.col}`, {publicKey: this.stateService.user.publicKey, requestId:requestId, result: sender});

    return req1.concatMap(res => req2).map(res => true);
  }
}
