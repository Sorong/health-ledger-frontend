import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {User} from '../models/user.model.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private col:string = "user";

  constructor(private http:HttpClient) { }

  get(): Observable<User> {
    return this.http.get(`${environment.host}${this.col}`)
                    .map(res=>{return res as User});
  }

  post(): Observable<User> {
    return this.http.post(`${environment.host}${this.col}`, {})
                    .map(res=>{return res as User});
  }
}
