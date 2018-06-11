import { Component, OnInit } from '@angular/core';
import {RestServiceService} from '../../services/restService/rest-service.service';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {

  constructor() { }

  // refreshTable(obs: Observable){
  //   this.ds = new MatTableDataSource(obs);
  // }
  //
  // ngOnInit() {
  //   this.rest.getRequests('KEY').subscribe(obs =>
  //     this.refreshTable(obs);
  //   );
  // }

}
