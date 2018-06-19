import { Component, OnInit } from '@angular/core';
import { Treatment } from '../../models/treatment.model';
import { ActivatedRoute } from '@angular/router';
import { TreatmentService } from '../../services/treatment.service';

@Component({
  selector: 'app-patient-treatment',
  templateUrl: './patient-treatment.component.html',
  styleUrls: ['./patient-treatment.component.css']
})
export class PatientTreatmentComponent implements OnInit {
  treatment:Treatment;

  constructor(private route:ActivatedRoute,
              private treatmentService:TreatmentService) { 
    this.route.params.map(p => p.id).subscribe(id => {
      this.treatmentService.get().subscribe(treatments => {
        this.treatment = treatments.find(t => t.id == id);
      });
    });}

  ngOnInit() {
    
  }

}
