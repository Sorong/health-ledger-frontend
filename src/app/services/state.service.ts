import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  /*
  * Removes the User Fabric Certificate from Storage Service
  */
  invalidate() {console.log('Called unimplemented invalidate()!');}

  /*
  * Returns the currently set  User Fabric Certificate
  */
  getFabricCert():string {return "CERT";}

}
