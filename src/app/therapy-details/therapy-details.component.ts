import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-therapy-details',
  templateUrl: './therapy-details.component.html',
  styleUrls: ['./therapy-details.component.css']
})
export class TherapyDetailsComponent implements OnInit {

  detailsCategory = new FormControl('', [Validators.required]);

  details = [
    {name: 'Allergie'},
    {name: 'Akute Erkrankungen'},
    {name: 'Chronische Erkrankungen'},
    {name: 'Sonstiges'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
