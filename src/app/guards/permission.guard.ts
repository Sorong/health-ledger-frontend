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
        patient: ['therapy-details', 'access-requests', 'access-request-details-user',
            'qr-code','health-record-user'],
        arzt: ['therapy-details', 'health-record', 'diagnostics', 'patient-overview',
            'access-requests', 'access-request-details', 'qr-code-scanner'],
        versicherung: ['therapy-details', 'health-record', 'patient-overview',
            'access-requests', 'access-request-details', 'qr-code-scanner'],
        apotheke: ['smart-recipe-overview', 'access-requests', 'access-request-details',
            'smart-recipe-details', 'qr-code-scanner'],
        arbeitgeber: ['access-requests', 'sick-note-overview', 'access-request-details',
            'qr-code-scanner', 'employee-overview']
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
