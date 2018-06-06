import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})
export class AccessRequestComponent implements OnInit {
  displayedColumns = ['datum', 'antragsteller', 'status', 'details'];
  //TODO: RequestForm nutzen
  ds = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

export interface Anfrage {
  datum: string;
  antragsteller: string;
  status: string;
  details: number;
}

const ELEMENT_DATA: Anfrage[] = [
  {datum: '12.05.2018', antragsteller: 'Dr. A', status: 'Offen', details: 1},
  {datum: '10.05.2018', antragsteller: 'Stiftsapotheke', status: 'Akzeptiert', details: 2},
];
