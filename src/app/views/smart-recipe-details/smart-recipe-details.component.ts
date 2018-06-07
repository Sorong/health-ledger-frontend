import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart-recipe-details',
  templateUrl: './smart-recipe-details.component.html',
  styleUrls: ['./smart-recipe-details.component.css']
})
export class SmartRecipeDetailsComponent implements OnInit {
  treatment = {
    id: '1', category: null, diagnose: 'Aids', prescription: {
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

  @Input()
  id: string;

  constructor() {
  }

  ngOnInit() {
  }

}
