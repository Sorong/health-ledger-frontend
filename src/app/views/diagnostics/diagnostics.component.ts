import {Component, OnInit} from '@angular/core';
import {Treatment} from '../../models/treatment.model';
import {v4 as uuid} from 'uuid';
import {ActivatedRoute} from '@angular/router';
import {TreatmentService} from '../../services/treatment.service';
import {StateService} from '../../services/state.service';
import {RequestService} from '../../services/request.service';

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
      date: new Date(),
      doctor: this.stateService.user.name,
      diagnose: {
        title: "",
        description: ''
      },
      prescription: {
        drug: '',
        dosage: '',
        note: ''
      },
      attestation: {
        from: new Date(),
        to: new Date()
      }
    };
  }

  ngOnInit() {
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
