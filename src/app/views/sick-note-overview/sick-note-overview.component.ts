import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-sick-note-overview',
  templateUrl: './sick-note-overview.component.html',
  styleUrls: ['./sick-note-overview.component.css']
})
export class SickNoteOverviewComponent implements OnInit {
  displayedColumns = ['einstelldatum', 'von', 'bis'];
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

export interface Anfrage {
  einstelldatum: string;
  von: string;
  bis: string;
}

const ELEMENT_DATA: Anfrage[] = [
  {einstelldatum: '12.05.2018', von: '12.05.2018', bis: '16.05.2018'},
  {einstelldatum: '06.05.2018', von: '07.05.2018', bis: '10.05.2018'},
];
