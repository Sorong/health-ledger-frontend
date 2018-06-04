import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

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
  constructor() { }


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
