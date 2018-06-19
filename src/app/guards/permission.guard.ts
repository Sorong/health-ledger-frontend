import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from '../services/state.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivateChild {

    static permissions = {
        patient: ['patient-overview', 'patient-treatment', 'access-requests', 'access-request-details-user', 'access-request-result', 'qr-code'],
        arzt: ['access-requests', 'access-request-result', 'access-request-details', 'qr-code-scanner'],
        versicherung: ['access-requests', 'access-request-result', 'access-request-details', 'qr-code-scanner'],
        apotheke: ['access-requests', 'access-request-result', 'access-request-details', 'qr-code-scanner'],
        arbeitgeber: ['access-requests', 'access-request-result', 'access-request-details', 'qr-code-scanner']
        };

    constructor(private stateService: StateService, private router: Router){}

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if(this.stateService.user){
                if(PermissionGuard.permissions[this.stateService.user.type.toLowerCase()].includes(state.url.split('/')[1])){
                    return true;
                } else {
                    console.log("Role \"" + this.stateService.user.type + "\" is not authorized to access this view! Redirecting...");
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        return false;
      }
}
