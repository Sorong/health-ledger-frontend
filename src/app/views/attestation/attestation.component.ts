import {Component, Input, OnInit} from '@angular/core';
import {Treatment} from '../../models/treatment.model';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {


  @Input()
  editable: Boolean;

  @Input()
  treatment: Treatment;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor() { }

  ngOnInit() {
  }

}
