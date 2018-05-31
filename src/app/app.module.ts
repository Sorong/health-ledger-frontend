import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TherapyDetailsComponent } from './therapy-details/therapy-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule, MatSelectModule} from '@angular/material';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'therapy-details', component: TherapyDetailsComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: 'therapy-details',
    component: TherapyDetailsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TherapyDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule, FormsModule, ReactiveFormsModule, MatOptionModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
