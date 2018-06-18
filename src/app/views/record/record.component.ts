import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {Treatment} from '../../models/treatment.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input()
  ds: MatTableDataSource<any>;

  displayedColumns = ['date', 'category', 'note', 'doctor_name', 'details'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  selectElement(id: string) {
    this.router.navigate(['./therapy-details', id]);
  }
}
