import { StorageService } from './services/storage.service';
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

  constructor(private storageService: StorageService) {
    this.name = storageService.getItem('name') ? storageService.getItem('name') : this.name;
  }
}
