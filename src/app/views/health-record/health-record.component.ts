import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Category, Treatment} from '../../models/treatment.model';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {
  //rest = new RestServiceService();

  displayedColumns = ['date', 'category', 'note', 'doctor_name', 'details'];
  ds = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }
  constructor() { }

  ngOnInit() {
  }

}



const ELEMENT_DATA: Treatment[] = [
  {
    id: '1', category: Category.bar, diagnose: 'Aids', prescription: {
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
  }, {
    id: '2', category: Category.bar, diagnose: 'Aids', prescription: {
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
  }
];

