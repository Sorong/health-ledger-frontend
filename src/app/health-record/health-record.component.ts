import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {

  displayedColumns = ['datum', 'kategorie', 'diagnose', 'arzt', 'details'];
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

export interface Behandlung {
  datum: string;
  kategorie: string;
  diagnose: string;
  arzt: string;
  details: number;
}

const ELEMENT_DATA: Behandlung[] = [
  {datum: '12.05.2018', kategorie: 'Allergie', diagnose: 'Patient reagiert auf Pollen...', arzt: 'Dr. A', details: 1},
  {datum: '11.05.2018', kategorie: 'Routine', diagnose: 'Blutabnahme zur Einsendung ins Labor...', arzt: 'Dr. B', details: 2},
  {datum: '04.04.2018', kategorie: 'Routine', diagnose: 'Blutabnahme zur Einsendung ins Labor...', arzt: 'Dr. C', details: 3},
  {datum: '03.02.2018', kategorie: 'Rückenschmerzen', diagnose: 'Patient äußert Beschwerden im Iliosakralgelenk...', arzt: 'Dr. A', details: 4},
];

