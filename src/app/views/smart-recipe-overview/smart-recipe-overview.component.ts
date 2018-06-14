import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {TreatmentService} from '../../services/treatment.service';

@Component({
  selector: 'app-smart-recipe-overview',
  templateUrl: './smart-recipe-overview.component.html',
  styleUrls: ['./smart-recipe-overview.component.css']
})
export class SmartRecipeOverviewComponent implements OnInit {

  treatmentService = new TreatmentService();
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
    this.treatmentService.get().subscribe(obs =>
      this.ds = new MatTableDataSource(obs)
    );
  }


  selectElement(id: string) {
    this.router.navigate(['./smart-recipe-details', id]);
  }
}
