import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.component.html',
  styleUrls: ['./patient-overview.component.css']
})
export class PatientOverviewComponent implements OnInit {
  displayedColumns = ['name', 'geburtsdatum', 'publickey', 'details'];
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

export interface Patient {
  name: string;
  geburtsdatum: string;
  publickey: string;
  details: number;
}

const ELEMENT_DATA: Patient[] = [
  {name: 'Klöpper, Fynn', geburtsdatum: '24.02.1997', publickey: '1f31j19j31fj1fj8138', details: 1},
];
