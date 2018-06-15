import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {TreatmentService} from '../../services/treatment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {
  treatmentService = new TreatmentService();

  displayedColumns = ['date', 'category', 'note', 'doctor_name', 'details'];
  ds = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.treatmentService.get().subscribe(obs =>
      this.ds = new MatTableDataSource(obs)
    );
  }

  selectElement(id: string) {
    this.router.navigate(['./therapy-details', id]);
  }
}
