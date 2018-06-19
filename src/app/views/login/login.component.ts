import { StorageService } from '../../services/storage.service';
import { StateService } from '../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showSpinner = false;

  constructor(private storageService: StorageService, private stateService: StateService) { }

  ngOnInit() {
      this.stateService.autoLoginFromStorage();
  }

  onChange(event) {
    this.showSpinner = true;
    var file = event.srcElement.files;
    var reader = new FileReader();
    reader.onload = (e) => {
         this.stateService.login(reader.result);
    }
    reader.readAsText(file[0], "UTF-8");
  }
}
