import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {RequestForm} from '../../models/requestForm.model';
import {Treatment} from '../../models/treatment.model';
import {RequestService} from '../../services/request.service';
import {TreatmentService} from '../../services/treatment.service';

@Component({
  selector: 'app-access-request-details-user',
  templateUrl: './access-request-details-user.component.html',
  styleUrls: ['./access-request-details-user.component.css']
})
export class AccessRequestDetailsUserComponent implements OnInit {
  from = '';
  to = '';
  displayedColumns = ['therapy', 'diagnose', 'recipe', 'incapacity'];
  ds = new MatTableDataSource([]);
  requestForm: RequestForm;
  requestService = new RequestService();
  treatmentService = new TreatmentService();
  treatments = [];

  constructor(private route: ActivatedRoute) {
    this.treatmentService.get().subscribe(obs => {this.treatments = obs});
    this.route.params.map(p => p.id).subscribe(id => {
      this.requestService.get().subscribe(obs => this.refreshData(obs, id));
    });
  }

  refreshData(obs: RequestForm[], id: string) {
    for (const item of obs) {
      if (item.id === id.toString()) {
        this.requestForm = item;
        break;
      }
    }

    const items = new Array<ListItem>();
    for (const t of this.treatments) {
      items.push(new ListItem(this.requestForm, t));
    }
    this.ds = new MatTableDataSource(items);
  }

  ngOnInit() {
  }
}

class CheckboxAttributes {
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;

  constructor(initChecked) {
    this.checked = initChecked;
    this.indeterminate = false;
    this.disabled = false;
  }
}

class ListItem {
  item: Treatment;
  treatment: CheckboxAttributes;
  recipe: CheckboxAttributes;
  attestation: CheckboxAttributes;

  constructor(request: RequestForm, treatment: Treatment) {
    this.item = treatment;
    this.treatment = new CheckboxAttributes(request.treatment);
    this.recipe = new CheckboxAttributes(request.recipe);
    this.attestation = new CheckboxAttributes(request.attestation);
  }
}
