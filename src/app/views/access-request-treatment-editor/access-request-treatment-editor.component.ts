import { Component, OnInit } from '@angular/core';
import { Treatment } from '../../models/treatment.model';
import { StateService } from '../../services/state.service';
import { Diagnose } from '../../models/diagnose.model';
import { TreatmentService } from '../../services/treatment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '../../models/request.model';
import { RequestService } from '../../services/request.service';
import { Prescription } from '../../models/prescription.model';
import { Attestation } from '../../models/attestation.model';

@Component({
  selector: 'app-access-request-treatment-editor',
  templateUrl: './access-request-treatment-editor.component.html',
  styleUrls: ['./access-request-treatment-editor.component.css']
})
export class AccessRequestTreatmentEditorComponent implements OnInit {
  request:Request;
  treatment:Treatment;

  constructor(private stateService:StateService,
              private router:Router,
              private route:ActivatedRoute,
              private requestService:RequestService,
              private treatmentService:TreatmentService) { 

    this.treatment = new Treatment();
    this.treatment.doctor = stateService.user.name;
    this.treatment.diagnose = new Diagnose();

    this.route.params.map(p => p.id).subscribe(id => {
      this.requestService.get().subscribe(requests => {
        this.request = requests.find(r => r.id == id);
      })
    });
  }

  ngOnInit() {
  }

  onPrescription(state) {
    if(state.checked == (this.treatment.prescription != null))
      return;

    this.treatment.prescription = state.checked ? new Prescription() : null;
  }

  onAttestation(state) {
    if(state.checked == (this.treatment.attestation != null))
      return;

    this.treatment.attestation = state.checked ? new Attestation() : null;
  }

  onSave(){
    this.treatmentService.post(this.request.publicKey, this.treatment).subscribe(rest => {
      this.router.navigate(['/access-requests']);
    });
  }

  onCancel(){
    this.router.navigate(['/access-request-result', this.request.id]);
  }
}
