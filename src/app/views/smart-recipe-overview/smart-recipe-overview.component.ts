import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Prescription} from '../../models/prescription.model';
import {Router} from '@angular/router';
import {Category, Treatment} from '../../models/treatment.model';
import {RestServiceService} from '../../services/restService/rest-service.service';

@Component({
  selector: 'app-smart-recipe-overview',
  templateUrl: './smart-recipe-overview.component.html',
  styleUrls: ['./smart-recipe-overview.component.css']
})
export class SmartRecipeOverviewComponent implements OnInit {

  service = new RestServiceService();
  displayedColumns = ['date', 'drug', 'dose', 'doctor', 'redeemed', 'details'];
  ds = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.service.getTreatments(null).subscribe(obs =>
      this.ds = new MatTableDataSource(obs)
    );
  }


  selectElement(id: string) {
    this.router.navigate(['./smart-recipe-details', id]);
  }
}
