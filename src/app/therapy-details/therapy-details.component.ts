import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-therapy-details',
  templateUrl: './therapy-details.component.html',
  styleUrls: ['./therapy-details.component.css']
})
export class TherapyDetailsComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  category = "Mag Rosenkohl"
  diagnose = "Massive psychische Störung, wer mag schon Rosenkohl?"
  recipe = "1kg Pizza pro Tag"


  constructor() { }

  ngOnInit() {
  }

}
