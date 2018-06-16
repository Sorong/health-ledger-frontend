import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RequestService} from '../../services/request.service';
import {Router} from '@angular/router';
import {RequestForm} from '../../models/requestForm.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() buttonName: string;
  displayedColumns = ['name', 'publickey', 'details'];
  ds = new MatTableDataSource([]);
  requestService = new RequestService();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router) {
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
    this.router.navigate(['./health-record', id]);
  }

  changeView() {
    this.router.navigate(['./qr-code-scanner']);
  }
}

