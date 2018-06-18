import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Treatment} from '../../models/treatment.model';
import {Category, Diagnose} from '../../models/diagnose.model';
import {Prescription} from '../../models/prescription.model';
import {Attestation} from '../../models/attestation.model';
import { ActivatedRoute } from '@angular/router';
import { TreatmentService } from '../../services/treatment.service';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})

export class DiagnosticsComponent implements OnInit {
  //Stateservice für akt. Username
  treatment: Treatment;
  pub_key: string;


  constructor(private route:ActivatedRoute, private treatmentService: TreatmentService) {
    this.route.params.map(p => p.pub_key).subscribe(pub_key => {
      this.pub_key = pub_key;
    });
    this.treatment = {
      id: '',
      issue_date: new Date(),
      patient_name: 'Hier könnte Ihr Name stehen',
      doctor_name: 'Dr. Acula',
      diagnose: {
        category: Category.NONE,
        diagnose: ''
      },
      prescription: {
        drug: '',
        until_date: new Date(),
        dosage: '',
        note: '',
        redeemed: false
      },
      attestation: {
        is_incapable: false,
        incapable_since: new Date(),
        incapable_until: new Date()
      }
    };
    this.treatment.prescription.until_date.setDate(new Date().getDate() + 7);
  }

  ngOnInit() {
  }

  postTreatment() {
    this.treatmentService.post(this.pub_key, this.treatment).subscribe(response =>{
      if(response != true){
        console.log("Error");
        console.log("Used PublicKey: " + this.pub_key);
        console.error(response);
      }
    });
  }
}
