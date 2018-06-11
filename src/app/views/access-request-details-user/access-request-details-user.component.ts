import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {RestServiceService} from '../../services/restService/rest-service.service';
import 'rxjs/add/operator/map';
import {RequestForm} from '../../models/requestForm.model';

@Component({
  selector: 'app-access-request-details-user',
  templateUrl: './access-request-details-user.component.html',
  styleUrls: ['./access-request-details-user.component.css']
})
export class AccessRequestDetailsUserComponent implements OnInit {
  from = "Dr. Acula"
  to = "Van Helsing"
  displayedColumns = ['therapy', 'diagnose', 'recipe', 'incapacity'];
  ds = new MatTableDataSource(ELEMENT_DATA);
  requestForm: RequestForm;
  rest = new RestServiceService();
  constructor(private route: ActivatedRoute) {
    this.route.params.map(p => p.id).subscribe(id => {
      this.rest.getRequests(null).subscribe(obs => this.refreshData(obs, id));
    });
  }

  refreshData(obs: RequestForm[], id: any) {
    for (const item of obs) {
      if (item.id === id.toString()) {
        this.requestForm = item;
        console.log(item);
        break;
      }
    }
  }

  ngOnInit() {
  }
}
export class CheckboxAttributes {
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;

  constructor(initChecked) {
    this.checked = initChecked;
    this.indeterminate = false;
    this.disabled = false;
  }
}

export interface Therapy {
  therapy: string;
  diagnose: CheckboxAttributes;
  recipe: CheckboxAttributes;
  incapacity: CheckboxAttributes;
}

const ELEMENT_DATA: Therapy[] = [
  {therapy: 'Behandlung 1', diagnose : new CheckboxAttributes(false), recipe : new CheckboxAttributes(true), incapacity : new CheckboxAttributes(false)},
  {therapy: 'Behandlung 1', diagnose : new CheckboxAttributes(true), recipe : new CheckboxAttributes(true), incapacity : new CheckboxAttributes(false)},
  {therapy: 'Behandlung 1', diagnose : new CheckboxAttributes(true), recipe : new CheckboxAttributes(true), incapacity : new CheckboxAttributes(false)}
];
