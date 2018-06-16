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
        patient: ['therapy-details', 'health-record', 'smart-recipe-overview',
            'diagnostics', 'smart-recipe-details', 'patient-overview', 'access-requests',
            'sick-note-overview', 'access-request-details-user', 'access-request-details',
            'qr-code', 'qr-code-scanner', 'employee-overview'],
        arzt: ['therapy-details', 'health-record', 'smart-recipe-overview',
            'diagnostics', 'smart-recipe-details', 'patient-overview', 'access-requests',
            'sick-note-overview', 'access-request-details-user', 'access-request-details',
            'qr-code', 'qr-code-scanner', 'employee-overview'],
        versicherung: ['therapy-details', 'health-record', 'smart-recipe-overview',
            'diagnostics', 'smart-recipe-details', 'patient-overview', 'access-requests',
            'sick-note-overview', 'access-request-details-user', 'access-request-details',
            'qr-code', 'qr-code-scanner', 'employee-overview'],
        apotheke: ['therapy-details', 'health-record', 'smart-recipe-overview',
            'diagnostics', 'smart-recipe-details', 'patient-overview', 'access-requests',
            'sick-note-overview', 'access-request-details-user', 'access-request-details',
            'qr-code', 'qr-code-scanner', 'employee-overview'],
        arbeitgeber: ['therapy-details', 'health-record', 'smart-recipe-overview',
            'diagnostics', 'smart-recipe-details', 'patient-overview', 'access-requests',
            'sick-note-overview', 'access-request-details-user', 'access-request-details',
            'qr-code', 'qr-code-scanner', 'employee-overview']
        };

    constructor(private stateService: StateService, private router: Router){}

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if(StateService.user){
                if(PermissionGuard.permissions[StateService.user.type.toLowerCase()].includes(state.url.split('/')[1])){
                    return true;
                } else {
                    console.log("Role \"" + StateService.user.type + "\" is not authorized to access this view! Redirecting...");
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        return false;
      }
}
