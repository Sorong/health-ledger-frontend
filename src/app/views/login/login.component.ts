import { StorageService } from '../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.storageService.setItem('name', 'Max Mustermann');
    var files = event.srcElement.files;
    console.log(files);
    location.reload();
  }
}
