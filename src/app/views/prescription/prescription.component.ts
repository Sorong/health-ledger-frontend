import {Component, Input, OnInit} from '@angular/core';
import {Treatment} from '../../models/treatment.model';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  @Input()
  editable: Boolean;

  @Input()
  treatment: Treatment;

  constructor() { }

  ngOnInit() {
  }

}
