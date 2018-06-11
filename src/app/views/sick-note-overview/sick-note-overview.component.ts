import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Category, Treatment} from '../../models/treatment.model';
import {RestServiceService} from '../../services/restService/rest-service.service';

@Component({
  selector: 'app-sick-note-overview',
  templateUrl: './sick-note-overview.component.html',
  styleUrls: ['./sick-note-overview.component.css']
})
export class SickNoteOverviewComponent implements OnInit {
  displayedColumns = ['einstelldatum', 'von', 'bis'];
  ds = new MatTableDataSource([]);
  rest = new RestServiceService();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }
  constructor() {   }

  refreshTable(obs: Observable){
    obs = obs.filter(entry => entry["attestation"] !== null);
    this.ds = new MatTableDataSource(obs);
  }

  ngOnInit() {
    this.rest.getTreatments('KEY').subscribe(obs =>
      this.refreshTable(obs);
    );
  }
}
