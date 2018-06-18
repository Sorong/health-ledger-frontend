import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RequestService} from '../../services/request.service';
import {Router} from '@angular/router';
import {RequestForm} from '../../models/requestForm.model';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})
export class AccessRequestComponent implements OnInit {
  displayedColumns = ['datum', 'antragsteller', 'status', 'details'];
  ds = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router, private requestService:RequestService) {
  }

  refreshTable(obs: RequestForm[]) {
    console.log(obs);
    this.ds = new MatTableDataSource(obs);
  }

  ngOnInit() {
    this.requestService.get().subscribe(obs =>
      this.refreshTable(obs)
    );
  }

  selectElement(id: string) {
    this.router.navigate(['./access-request-details-user', id]);
  }
}
