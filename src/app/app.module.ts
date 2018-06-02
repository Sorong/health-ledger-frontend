import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { QRCodeModule } from 'angularx-qrcode';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {HealthRecordComponent} from './health-record/health-record.component';
import {RouterModule, Routes} from '@angular/router';
import {TherapyDetailsComponent} from './therapy-details/therapy-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SmartRecipeOverviewComponent} from './smart-recipe-overview/smart-recipe-overview.component';
import {DiagnosticsComponent} from './diagnostics/diagnostics.component';
import {PatientOverviewComponent} from './patient-overview/patient-overview.component';
import {AccessRequestComponent} from './access-request/access-request.component';
import {SickNoteOverviewComponent} from './sick-note-overview/sick-note-overview.component';
import {SmartRecipeDetailsComponent} from './smart-recipe-details/smart-recipe-details.component';
import {AccessRequestDetailsUserComponent} from './access-request-details-user/access-request-details-user.component';
import {AccessRequestDetailsComponent} from './access-request-details/access-request-details.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';



const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'therapy-details', component: TherapyDetailsComponent},
  {path: 'health-record', component: HealthRecordComponent},
  {path: 'smart-recipe-overview', component: SmartRecipeOverviewComponent},
  {path: 'diagnostics', component: DiagnosticsComponent},
  {path: 'smart-recipe-details', component: SmartRecipeDetailsComponent},
  {path: 'patient-overview', component: PatientOverviewComponent},
  {path: 'access-requests', component: AccessRequestComponent},
  {path: 'sick-note-overview', component: SickNoteOverviewComponent},
  {path: 'access-request-details-user', component: AccessRequestDetailsUserComponent},
  {path: 'access-request-details', component: AccessRequestDetailsComponent},
  {path: 'qr-code', component: QrCodeComponent},
  {path: 'qr-code-scanner', component: QrCodeScannerComponent},
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TherapyDetailsComponent,
    HealthRecordComponent,
    SmartRecipeOverviewComponent,
    DiagnosticsComponent,
    PatientOverviewComponent,
    AccessRequestComponent,
    SickNoteOverviewComponent,
    SmartRecipeDetailsComponent,
    AccessRequestDetailsUserComponent,
    AccessRequestDetailsComponent,
    QrCodeComponent,
    QrCodeScannerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    //Therapy-Details:
    FormsModule, ReactiveFormsModule,
    //End-TherapyDetails
    QRCodeModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
