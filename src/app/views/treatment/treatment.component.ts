import {Component, Input, OnInit} from '@angular/core';
import {Treatment} from '../../models/treatment.model';
import {FormControl, Validators} from '@angular/forms';
import {Category} from '../../models/diagnose.model';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {


  @Input()
  editable: Boolean;

  @Input()
  treatment: Treatment;

  detailsCategory = new FormControl('', [Validators.required]);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  category = Object.values(Category).slice(1);

  constructor() {
  }

  ngOnInit() {
  }

}
