import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model.interface';
import {USERS} from '../models/mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
  }

  get (): Observable<User> {
    return of(USERS[0]);
  }

  post(): Observable<User> {
    return of(USERS[0]);
  }
}
