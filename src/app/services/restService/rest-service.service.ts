import {Injectable} from '@angular/core';
import {RequestForm} from '../../models/requestForm.model';
import {Treatment} from '../../models/treatment.model';
import {User} from '../../models/user.model.interface';

import {REQUESTS} from '../../models/mocks/mock-requests';
import {USERS} from '../../models/mocks/mock-users';
import {TREATMENT} from '../../models/mocks/mock-treatment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor() {
  }

  getUser(pub_key: string): Observable<User> {
    return of(USERS[0]);
  }

  postUser(pub_key: string, user: User) {
    console.log(pub_key);
  }


  getRequests(pub_key: string): Observable<RequestForm[]> {
    return of(REQUESTS);
  }

  postRequests(pub_key: string) {
    console.log(pub_key);
  }

  putRequests(pub_key: string, id: string) {
    console.log(pub_key + id);
  }

  getTreatments(pub_key: string): Observable<Treatment[]> {
    return of(TREATMENT);
  }

  postTreatments(pub_key: string) {
    console.log(pub_key);
  }
}
