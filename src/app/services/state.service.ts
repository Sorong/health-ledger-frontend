import { Injectable } from '@angular/core';
import { User } from '../models/user.model.interface';
import { Router } from "@angular/router";
import { StorageService } from './storage.service';
import { CryptoService } from './crypto.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public user: User;

  static default_pages = {patient: '/patient-overview',
                            arzt: '/access-request',
                            versicherung: '/access-request',
                            apotheke: '/access-request',
                            arbeitgeber: '/access-request'};

  constructor(private router: Router,
      private storage: StorageService,
      private userService: UserService,
      private cryptoService: CryptoService) { }

  /*
  * Removes the User Fabric Certificate from Storage Service which constitutes a logout of the current user.
  */
  invalidate() {
      if (this.storage.getItem("FabricCert")) {
          this.storage.removeItem("FabricCert");
      }
      if (this.storage.getItem("L2PublicKey")) {
          this.storage.removeItem("L2PublicKey");
      }
      if (this.storage.getItem("L2PrivateKey")) {
          this.storage.removeItem("L2PrivateKey");
      }
      this.user = undefined;
      console.log('Fabric Certificate was invalidated and L2-Keys removed! Logging out...');
      this.router.navigate(['/login']);
  }


  /*
  * Login by providing a valid Fabric User Certificate.
  * Generates and stores an L2 encryption key pair if no keys are found.
  */
  login(cert: string) {
      if (!cert || 0 === cert.length) {console.log("No Certificate provided to stateService.login()!"); return;}

      //alway creates new keys on login
      let keys = this.cryptoService.generateKeyPair();

      this.storage.setItem("FabricCert", cert);
      this.storage.setItem("L2PrivateKey", keys[0]);
      this.storage.setItem("L2PublicKey", keys[1]);

      this.userService.post().subscribe(
          (user) => {
              this.user = user;
              console.log("Logged in! Welcome, " + this.user.name + "!");
              this.router.navigate([StateService.default_pages[this.user.type.toLowerCase()]]);
          }, (err) => console.log(err)
      );
  }

  /*
  * To be called on load. Authorizes user from stored certificate.
  */
  autoLoginFromStorage(){
      if(this.storage.getItem("FabricCert") && this.storage.getItem("L2PublicKey")){
        this.userService.get().subscribe(
            (user) => {
                this.user = user;
                console.log("Logged in! Welcome, " + this.user.name + "!");
                this.router.navigate([StateService.default_pages[this.user.type.toLowerCase()]]);
            }, (err) => console.log(err)
        );
      }
  }

}
