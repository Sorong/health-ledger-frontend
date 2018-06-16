import {Component, Input, OnInit} from '@angular/core';
import {Treatment} from '../../models/treatment.model';
import {FormControl, Validators} from '@angular/forms';

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

  constructor() {
  }

  ngOnInit() {
  }

}
