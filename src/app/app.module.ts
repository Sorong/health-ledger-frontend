import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule, MatTableModule} from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HealthRecordComponent } from './health-record/health-record.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'health-record', component: HealthRecordComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'health-record',
    component: HealthRecordComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HealthRecordComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
