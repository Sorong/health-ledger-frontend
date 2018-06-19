import { Component, OnInit } from '@angular/core';
import { Treatment } from '../../models/treatment.model';
import { TreatmentService } from '../../services/treatment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.component.html',
  styleUrls: ['./patient-overview.component.css']
})
export class PatientOverviewComponent implements OnInit {
  treatments:Array<Treatment>

  constructor(private treatmentService:TreatmentService,
              private router: Router) { }

  ngOnInit() {
    this.treatmentService.get().subscribe(treatments=>{
      this.treatments = treatments;
    });
  }

  onSelected(treatment:Treatment) {
    this.router.navigate(['patient-treatment', treatment.id]);
  }

}

