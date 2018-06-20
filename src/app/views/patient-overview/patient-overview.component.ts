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
  treatments:Array<Treatment>;

  reloadButtonOptions: any = {
    active: false,
    text: 'Aktualisieren',
    spinnerSize: 18,
    raised: true,
    buttonColor: 'default',
    spinnerColor: 'accent'
  };

  constructor(private treatmentService:TreatmentService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.reloadButtonOptions.active = true;
    this.reloadButtonOptions.text = 'Lade Daten...';

    this.treatmentService.get().subscribe(treatments => {
      this.treatments = treatments;

      setTimeout(() => {
        this.reloadButtonOptions.active = false;
        this.reloadButtonOptions.text = 'Aktualisieren';
      }, 1000);
    });
  }

  onSelected(treatment:Treatment) {
    this.router.navigate(['patient-treatment', treatment.id]);
  }

}

