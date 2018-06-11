import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {RequestForm} from '../models/requestForm.model';
import {REQUESTS} from '../models/mocks/mock-requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() {
  }

  get (): Observable<RequestForm[]> {
    return of(REQUESTS);
  }

  post(pubKey: string, form: RequestForm): Observable {
    return Observable.empty();
  }

  put(pubKey: string, form: RequestForm): Observable {
    return Observable.empty();
  }
}
