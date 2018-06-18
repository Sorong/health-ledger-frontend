import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Treatment} from '../../models/treatment.model';
import {Category, Diagnose} from '../../models/diagnose.model';
import {Prescription} from '../../models/prescription.model';
import {Attestation} from '../../models/attestation.model';
import {v4 as uuid} from 'uuid';
import {ActivatedRoute} from '@angular/router';
import {TreatmentService} from '../../services/treatment.service';
import {UserService} from '../../services/user.service';
import {StateService} from '../../services/state.service';
import {RequestService} from '../../services/request.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})

export class DiagnosticsComponent implements OnInit {
  //Stateservice für akt. Username
  treatment: Treatment;
  pub_key: string;


  constructor(private route: ActivatedRoute, private treatmentService: TreatmentService, private stateService : StateService, private requestService : RequestService) {
    this.route.params.map(p => p.pub_key).subscribe(pub_key => {
      this.pub_key = pub_key;
    });
    this.treatment = {
      id: uuid(),
      issue_date: new Date(),
      patient_name: 'Hirsch heiß ich',
      doctor_name: this.stateService.user.name,
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
    this.requestService.get().subscribe(obs => {
        const filtered_obs = obs.filter(entry => entry['id'] === this.pub_key);
        if (filtered_obs.length !== 0) {
          this.treatment.patient_name = filtered_obs[0].requester;
        }
      }
    );
  }

  postTreatment() {
    this.treatmentService.post(this.pub_key, this.treatment).subscribe(response => {
      if (response !== true) {
        console.log('Error');
        console.log('Used PublicKey: ' + this.pub_key);
        console.error(response);
      }
    });
  }
}
