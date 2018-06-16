import { Injectable } from '@angular/core';
import { User } from '../models/user.model.interface';
import { Router } from "@angular/router";
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  static user: User;

  static default_pages = {patient: '/health-record',
                            arzt: '/login',
                            versicherung: '/login',
                            apotheke: '/login',
                            arbeitgeber: '/login'};

  constructor(private router: Router,
      private storage: StorageService,
      private userService: UserService) { }

  /*
  * Removes the User Fabric Certificate from Storage Service which constitutes a logout of the current user.
  */
  invalidate() {
      if (this.storage.getItem("FabricCert")) {
          this.storage.removeItem("FabricCert");
      }
      StateService.user = undefined;
      console.log('Fabric Certificate was invalidated! Logging out...');
      this.router.navigate(['/login']);
  }

  getLoggedInUser(){
      return StateService.user;
  }

  /*
  * Login by providing a valid Fabric User Certificate
  */
  login(cert: string) {
      if (!cert || 0 === cert.length) {console.log("No Certificate provided to stateService.login()!"); return;}
      this.storage.setItem("FabricCert", cert);
      this.userService.get().subscribe(
          (user) => {
              StateService.user = user;
              console.log("Logged in! Welcome, " + StateService.user.name + "!");
              this.router.navigate([StateService.default_pages[StateService.user.type.toLowerCase()]]);
          }, (err) => console.log(err)
      );
  }

  /*
  * To be called on load. Authorizes user from stored certificate.
  */
  autoLoginFromStorage(){
      if(this.storage.getItem("FabricCert")){
          this.login(this.storage.getItem("FabricCert"));
      }
  }

}
