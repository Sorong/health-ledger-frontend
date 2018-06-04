import { Injectable } from '@angular/core';
import { RequestForm} from '../../models/requestForm.model';
import { Treatment} from '../../models/treatment.model';
import { PERSCRIPTIONS } from '../mocks/mock-SmartPerscription';
import { REQUESTS } from '../mocks/mock-requests';
import { USERS } from '../mocks/mock-users'

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor() { }
  
  getUser(pub_key: string){
	 return USERS;
  }
  
  postUser(pub_key: string, user: Participant){
	    
  }
    
  getRequests(pub_key: string){
	  return REQUESTS;
  }
  
  postRequests(pub_key: string){
	  
  }
  
  putRequests(pub_key: string, id: string){
	  
  }
  
  getTreatments(pub_key: string){
	  return TREATMENTS;
  }

  postTreatments(pub_key: string){
	  
  }
    
}
