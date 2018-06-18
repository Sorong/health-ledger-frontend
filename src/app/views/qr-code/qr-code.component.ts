import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  public userData: string = null;
  constructor(private stateService: StateService) {
    this.userData = JSON.stringify({
      'publicKey' : this.stateService.user.publicKey,
      'name' : this.stateService.user.name
    });
  }

  ngOnInit() {
  }

}
