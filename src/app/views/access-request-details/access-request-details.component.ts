import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-access-request-details',
  templateUrl: './access-request-details.component.html',
  styleUrls: ['./access-request-details.component.css']
})
export class AccessRequestDetailsComponent implements OnInit {
  key = '';
  name = '';
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

  constructor(private route: ActivatedRoute) {
    this.route.params.map(p => p.key).subscribe(key => this.key = key );
    this.route.params.map(p => p.name).subscribe(name => this.name = name );
  }
  
  ngOnInit() {
  }

}
