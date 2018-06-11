import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Treatment} from '../../models/treatment.model';

@Component({
  selector: 'app-therapy',
  templateUrl: './therapy.component.html',
  styleUrls: ['./therapy.component.css']
})
export class TherapyComponent implements OnInit {

  @Input()
  editable: Boolean;

  @Input()
  treatment: Treatment;
  detailsCategory = new FormControl('', [Validators.required]);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());


  details = [
    {name: 'Allergie'},
    {name: 'Akute Erkrankungen'},
    {name: 'Chronische Erkrankungen'},
    {name: 'Sonstiges'},
    {name: 'Mag Rosenkohl'}
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
