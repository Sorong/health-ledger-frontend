import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {QRCodeModule} from 'angularx-qrcode';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './views/login/login.component';
import {HealthRecordComponent} from './views/health-record/health-record.component';
import {RouterModule, Routes} from '@angular/router';
import {TherapyDetailsComponent} from './views/therapy-details/therapy-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SmartRecipeOverviewComponent} from './views/smart-recipe-overview/smart-recipe-overview.component';
import {DiagnosticsComponent} from './views/diagnostics/diagnostics.component';
import {PatientOverviewComponent} from './views/patient-overview/patient-overview.component';
import {AccessRequestComponent} from './views/access-request/access-request.component';
import {SickNoteOverviewComponent} from './views/sick-note-overview/sick-note-overview.component';
import {SmartRecipeDetailsComponent} from './views/smart-recipe-details/smart-recipe-details.component';
import {AccessRequestDetailsUserComponent} from './views/access-request-details-user/access-request-details-user.component';
import {AccessRequestDetailsComponent} from './views/access-request-details/access-request-details.component';
import {QrCodeComponent} from './views/qr-code/qr-code.component';
import {QrCodeScannerComponent} from './views/qr-code-scanner/qr-code-scanner.component';
import {OverviewComponent} from './views/overview/overview.component';
import {EmployeeOverviewComponent} from './views/employee-overview/employee-overview.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {TherapyComponent} from './views/therapy/therapy.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './interceptors/http-interceptor';


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
  {path: 'employee-overview', component: EmployeeOverviewComponent},
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
    QrCodeScannerComponent,
    OverviewComponent,
    EmployeeOverviewComponent,
    TherapyComponent
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
    FormsModule, ReactiveFormsModule,
    QRCodeModule,
    ZXingScannerModule.forRoot(),
    //End-TherapyDetails
    HttpClientModule
  ],
  exports: [],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptor,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
