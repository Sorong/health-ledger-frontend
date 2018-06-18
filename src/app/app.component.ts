import { StateService } from './services/state.service';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { CommonModule } from '@angular/common'; 
import { PermissionGuard } from './guards/permission.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = '';

  constructor(public state: StateService) {
  }

  permissionSmartRecipe(): boolean {
    return this.itemIsAviableForUser('smart-recipe-overview');
  }

  permissionDiagnostic(): boolean{
    return this.itemIsAviableForUser('diagnostics');
  }

  permissionPatientOverview(): boolean{
    return this.itemIsAviableForUser('patient-overview');
  }

  permissionHealthRecordUser(): boolean{
    return this.itemIsAviableForUser('health-record-user');
  }

  permissionEmployeeOverview(): boolean{
    return this.itemIsAviableForUser('employee-overview');
  }

  permissionAccessRequest(): boolean{
    return this.itemIsAviableForUser('access-requests');
  }

  permissionSickNote(): boolean{
    return this.itemIsAviableForUser('sick-note-overview');
  }

  permissionQrCode(): boolean{
    return this.itemIsAviableForUser('qr-code');
  }

  permissionQrCodeScanner(): boolean{
    return this.itemIsAviableForUser('qr-code-scanner');
  }

  permissionLogin(): boolean{
    if(this.state.user == undefined){
      return true;
    }
    else{
      if(PermissionGuard.permissions[this.state.user.type.toLocaleLowerCase()].includes('smart-recipe-overview'))
        return true;
    }
    return false;
  }

  private itemIsAviableForUser(sideBarItem: string): boolean{
    if(this.state.user == undefined){
      return false;
    }
    else{
      if(PermissionGuard.permissions[this.state.user.type.toLocaleLowerCase()].includes(sideBarItem))
        return true;
    }
    return false;
  }
}
