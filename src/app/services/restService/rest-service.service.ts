import {Injectable} from '@angular/core';
import {RequestForm} from '../../models/requestForm.model';
import {Treatment} from '../../models/treatment.model';
import {Participant} from '../../models/participant.model.interface';
import {PERSCRIPTIONS} from '../../models/mocks/mock-SmartPerscription';
import {REQUESTS} from '../../models/mocks/mock-requests';
import {USERS} from '../../models/mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor() {
  }

  getUser(pub_key: string) {
    return USERS;
  }

  postUser(pub_key: string, user: Participant) {

  }


  getRequests(pub_key: string) {
    return REQUESTS;
  }

  postRequests(pub_key: string) {

  }

  putRequests(pub_key: string, id: string) {

  }

  getTreatments(pub_key: string) {
    //return TREATMENTS;
  }

  postTreatments(pub_key: string) {

  }
}
