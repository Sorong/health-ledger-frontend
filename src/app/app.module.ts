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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HealthRecordComponent
  ],
  imports: [
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
