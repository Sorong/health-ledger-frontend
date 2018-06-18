import { Component, OnInit } from '@angular/core';
import {TreatmentService} from '../../services/treatment.service';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-health-record-user',
  templateUrl: './health-record-user.component.html',
  styleUrls: ['./health-record-user.component.css']
})
export class HealthRecordUserComponent implements OnInit {

  displayedColumns = ['date', 'category', 'note', 'doctor_name', 'details'];
  ds = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router, private treatmentService: TreatmentService) {
  }

  ngOnInit() {
    this.treatmentService.get().subscribe(obs =>
      this.ds = new MatTableDataSource(obs)
    );
  }
}
