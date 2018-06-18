import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Treatment} from '../../models/treatment.model';
import {TreatmentService} from '../../services/treatment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sick-note-overview',
  templateUrl: './sick-note-overview.component.html',
  styleUrls: ['./sick-note-overview.component.css']
})
export class SickNoteOverviewComponent implements OnInit {
  displayedColumns = ['einstelldatum', 'von', 'bis'];
  ds = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private treatmentService:TreatmentService, private router : Router) {
  }

  refreshTable(obs: Treatment[]) {
    console.log(obs);
    obs = obs.filter(entry => entry['attestation'] !== null);
    this.ds = new MatTableDataSource(obs);
  }

  ngOnInit() {
    this.treatmentService.get().subscribe(obs =>
      this.refreshTable(obs));
  }
  back() {
    this.router.navigate(['./login']);
  }
}
