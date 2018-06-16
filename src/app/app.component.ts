import { StateService } from './services/state.service';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';

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
}
