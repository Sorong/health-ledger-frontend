import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Treatment} from '../models/treatment.model';
import {TREATMENT} from '../models/mocks/mock-treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor() {
  }


  get (): Observable<Treatment[]> {
    return of(TREATMENT);
  }

  post(pub_key: string): Observable<never> {
    return new Observable<never>(subscriber => subscriber.complete());
  }
}
