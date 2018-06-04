import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-access-request-details',
  templateUrl: './access-request-details.component.html',
  styleUrls: ['./access-request-details.component.css']
})
export class AccessRequestDetailsComponent implements OnInit {
  from = "Dr. Acula"
  to = "Van Helsing"
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  detailsCategory = new FormControl('', [Validators.required]);
  details = [
    {name: 'Alles'},
    {name: 'Allergie'},
    {name: 'Akute Erkrankungen'},
    {name: 'Chronische Erkrankungen'},
    {name: 'Sonstiges'},
    {name: 'Mag Rosenkohl'}
  ];

  checkedDiagnose = false;
  indeterminateDiagnose = false;
  disabledDiagnose = false;

  checkedRecipe = false;
  indeterminateRecipe = false;
  disabledRecipe = false;

  checkedIncapacity = false;
  indeterminateIncapacity = false;
  disabledIncapacity = false;

  constructor() { }

  ngOnInit() {
  }

}
