import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-smart-recipe-overview',
  templateUrl: './smart-recipe-overview.component.html',
  styleUrls: ['./smart-recipe-overview.component.css']
})
export class SmartRecipeOverviewComponent implements OnInit {
  displayedColumns = ['datum', 'medikamentname', 'dosierung', 'arzt', 'details'];
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
  medikamentname: string;
  dosierung: string;
  arzt: string;
  details: number;
}

const ELEMENT_DATA: Behandlung[] = [
  {datum: '12.05.2018', medikamentname: 'Ebastel', dosierung: '2x tgl.', arzt: 'Dr. A', details: 1},
];
