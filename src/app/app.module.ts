import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';

import {QRCodeModule} from 'angularx-qrcode';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

import {LoginComponent} from './views/login/login.component';

import {PatientOverviewComponent} from './views/patient-overview/patient-overview.component';
import {PatientTreatmentComponent} from './views/patient-treatment/patient-treatment.component';

import {AccessRequestComponent} from './views/access-request/access-request.component';
import {AccessRequestDetailsUserComponent} from './views/access-request-details-user/access-request-details-user.component';
import {AccessRequestDetailsComponent} from './views/access-request-details/access-request-details.component';
import { AccessRequestResultComponent } from './views/access-request-result/access-request-result.component';

import { TreatmentListComponent } from './views/treatment-list/treatment-list.component';
import { TreatmentComponent } from './views/treatment/treatment.component';

import {QrCodeComponent} from './views/qr-code/qr-code.component';
import {QrCodeScannerComponent} from './views/qr-code-scanner/qr-code-scanner.component';
import {HttpHeaderProxy} from './interceptors/http-header-proxy';
import {AuthGuard} from './guards/auth.guard';
import {PermissionGuard} from './guards/permission.guard';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', canActivate: [AuthGuard], canActivateChild: [PermissionGuard], children: [
      {path: 'patient-overview', component: PatientOverviewComponent},
      {path: 'patient-treatment/:id', component: PatientTreatmentComponent},
      {path: 'access-requests', component: AccessRequestComponent},
      {path: 'access-request-details-user/:id', component: AccessRequestDetailsUserComponent},
      {path: 'access-request-details/:key/:name', component: AccessRequestDetailsComponent},
      {path: 'access-request-result/:id', component: AccessRequestResultComponent},
      {path: 'qr-code', component: QrCodeComponent},
      {path: 'qr-code-scanner', component: QrCodeScannerComponent}
    ]
  },
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

    PatientOverviewComponent,
    PatientTreatmentComponent,
    
    AccessRequestComponent,
    AccessRequestDetailsUserComponent,
    AccessRequestDetailsComponent,
    AccessRequestResultComponent,
    
    QrCodeComponent,
    QrCodeScannerComponent,
    
    TreatmentListComponent,
    TreatmentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    QRCodeModule,
    ZXingScannerModule.forRoot(),
    HttpClientModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderProxy,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
