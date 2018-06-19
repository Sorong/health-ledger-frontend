import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Treatment} from '../../models/treatment.model';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent implements OnInit {
  datasource:MatTableDataSource<Treatment>;

  @Input()
  set treatments(treatments:Treatment[]){
    this.datasource = new MatTableDataSource(treatments);
  }

  @Input()
  set filter(filter:string) {
    filter = filter.trim(); // Remove whitespace
    filter = filter.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.datasource.filter = filter;
  }

  @Output() 
  onSelected: EventEmitter<Treatment> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
