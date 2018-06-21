import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../../models/request.model';
import {Treatment} from '../../models/treatment.model';
import {RequestService} from '../../services/request.service';
import {TreatmentService} from '../../services/treatment.service';
import { Result } from '../../models/result.model';

@Component({
  selector: 'app-access-request-details-user',
  templateUrl: './access-request-details-user.component.html',
  styleUrls: ['./access-request-details-user.component.css']
})
export class AccessRequestDetailsUserComponent implements OnInit {
  private request:Request;
  private ds:MatTableDataSource<ListItem>;

  saveButtonOptions: any = {
    active: false,
    text: 'Annehmen',
    spinnerSize: 18,
    raised: true,
    buttonColor: 'primary',
    spinnerColor: 'accent'
  };


  rejectButtonOptions: any = {
    active: false,
    text: 'Ablehnen',
    spinnerSize: 18,
    raised: true,
    buttonColor: 'accent',
    spinnerColor: 'primary'
  };

  constructor(private requestService: RequestService,
              private treatmentService: TreatmentService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.map(p => p.id).subscribe(id => {
      this.treatmentService.get().subscribe(treatments => {
        this.requestService.get().subscribe(requests => this.refreshData(treatments, requests, id))
      });
    });
  }

  refreshData(treatments:Treatment[], requests: Request[], id: string) {
    this.request = requests.find(r => r.id == id);
    if(this.request == null)
      return;

    console.log(this.request);

    const items = new Array<ListItem>();
    for (const t of treatments) {
      items.push(new ListItem(this.request, t));
    }
    this.ds = new MatTableDataSource(items);
  }

  ngOnInit() {
  }

  onSave() {
    this.saveButtonOptions.active = true;
    this.saveButtonOptions.text = 'Annehmen...';

    let treatments = new Array<Treatment>();
    for(const item of this.ds.data) {
      let treatment = item.item;

      if(!item.treatment)
        treatment.diagnose = null;

      if(!item.attestation)
        treatment.attestation = null;

      if(!item.recipe)
        treatment.prescription = null;

      if(treatment.diagnose == null && treatment.attestation == null && treatment.prescription == null)
        continue;

      treatments.push(treatment);
    }

    let result:Result = {
      rejected: false,
      reason: null,
      treatment: treatments,
    }

    this.requestService.put(this.request.publicKey, this.request.id, result).subscribe(res=>{
      this.router.navigate(['/access-requests']);
    })
  }

  decline() {
    this.rejectButtonOptions.active = true;
    this.rejectButtonOptions.text = 'Ablehnen...';

    let result: Result = {
      rejected: true,
      reason: 'abgelehnt',
      treatment: null
    };

    this.requestService.put(this.request.publicKey, this.request.id,  result).subscribe(res => {
      this.rejectButtonOptions.active = false;
      this.rejectButtonOptions.text = 'Ablehnen';
      this.router.navigate(['/access-requests']);
    });
  }

}

class ListItem {
  item: Treatment;
  treatment: boolean;
  recipe: boolean;
  attestation: boolean;

  constructor(request: Request, treatment: Treatment) {
    this.item = treatment;
    this.treatment = request.treatment;
    this.recipe = request.recipe;
    this.attestation = request.attestation;
  }
}
