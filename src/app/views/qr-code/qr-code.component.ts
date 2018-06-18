import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  public publicKey: string = null;
  constructor(private router : Router) {
    this.publicKey = 'Hello World';
  }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['./login']);
  }
}
