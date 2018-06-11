import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-therapy-details',
  templateUrl: './therapy-details.component.html',
  styleUrls: ['./therapy-details.component.css']
})
export class TherapyDetailsComponent implements OnInit {
  treatment = {
    id: '1', category: 'foo', diagnose: 'Aids', prescription: {
      drug: 'Axelavir',
      patient_name: 'Klim',
      doctor_name: 'Zero Sr.',
      until_date: new Date(),
      note: 'Water is wet',
      redeemed: false
    }, attestation: {
      is_incapable: true,
      incapable_until: new Date(),
      incapable_since: new Date(0)
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
