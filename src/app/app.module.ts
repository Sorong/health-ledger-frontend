import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import {MatInputModule} from '@angular/material';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {HealthRecordComponent} from './health-record/health-record.component';
import {RouterModule, Routes} from '@angular/router';
import {TherapyDetailsComponent} from './therapy-details/therapy-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule, MatSelectModule} from '@angular/material';
import { SmartRecipeOverviewComponent } from './smart-recipe-overview/smart-recipe-overview.component';
import { PatientOverviewComponent } from './patient-overview/patient-overview.component';
import { AccessRequestComponent } from './access-request/access-request.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'therapy-details', component: TherapyDetailsComponent},
  {path: 'health-record', component: HealthRecordComponent},
  {path: 'smart-recipe-overview', component: SmartRecipeOverviewComponent},
  {path: 'patient-overview', component: PatientOverviewComponent},
  {path: 'access-requests', component: AccessRequestComponent},
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
    PatientOverviewComponent,
    AccessRequestComponent
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
    FormsModule, ReactiveFormsModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    //End-TherapyDetails
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
