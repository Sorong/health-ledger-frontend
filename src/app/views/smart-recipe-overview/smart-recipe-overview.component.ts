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

  serv = new RestServiceService();
  data = [];
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
    this.serv.getTreatments('KEY').subscribe(obs =>
      this.ds = new MatTableDataSource(obs)
    );
  }


  selectElement(id: string) {
    this.router.navigate(['./smart-recipe-details']);
  }
}


const ELEMENT_DATA: Treatment[] = [
  {
    id: '1', category: Category.bar, diagnose: 'Aids', prescription: {
      drug: 'Axelavir',
      patient_name: 'Klim',
      doctor_name: 'Zero Sr.',
      until_date: new Date(),
      note: 'Water is wet',
      redeemed: false
    }, attestation: {
      is_incapable: true,
      incapable_until: new Date(),
      incapable_since: new Date(0)
    }
  }, {
    id: '2', category: Category.bar, diagnose: 'Aids', prescription: {
      drug: 'Axelavir',
      patient_name: 'Klim',
      doctor_name: 'Zero Sr.',
      until_date: new Date(),
      note: 'Water is wet',
      redeemed: false
    }, attestation: {
      is_incapable: true,
      incapable_until: new Date(),
      incapable_since: new Date(0)
    }
  }
];

