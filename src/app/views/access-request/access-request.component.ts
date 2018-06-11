import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {RestServiceService} from '../../services/restService/rest-service.service';
import {RequestForm} from '../../models/requestForm.model';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})
export class AccessRequestComponent implements OnInit {
  displayedColumns = ['datum', 'antragsteller', 'status', 'details'];
  ds = new MatTableDataSource([]);
  rest = new RestServiceService();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router) {
  }

  refreshTable(obs: RequestForm[]){
    this.ds = new MatTableDataSource(obs);
  }

  ngOnInit() {
    this.rest.getRequests('KEY').subscribe(obs =>
      this.refreshTable(obs)
    );
  }

  selectElement(id: string) {
    this.router.navigate(['./access-request-details-user', id]);
  }
}
