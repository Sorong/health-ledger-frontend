import {Component, Input, OnInit} from '@angular/core';
import { Treatment } from '../../models/treatment.model';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  @Input()
  treatment:Treatment;

  constructor() {
  }

  ngOnInit() {
  }

}
