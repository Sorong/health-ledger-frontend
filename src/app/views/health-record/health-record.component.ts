import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {StateService} from '../../services/state.service';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {
  displayedColumns = ['date', 'category', 'note', 'doctor_name', 'details'];
  dataSource = new MatTableDataSource([]);
  request:Request;
  isDoctor = false;

  constructor(private router: Router, private route: ActivatedRoute, private requestService: RequestService, private stateService: StateService) {
    this.route.params.map(p => p.id).subscribe(id => this.refresh(id));
    this.isDoctor = this.stateService.user.type.toLowerCase() === 'arzt';
  }

  refresh(id) {
    this.requestService.get().subscribe(obs => {
      this.request = obs.find(entry => entry.id === id);
      this.dataSource = new MatTableDataSource(this.request.Result.treatment);
    });
  }

  ngOnInit() {
  }

  addDiagnose() {
    this.router.navigate(['./diagnostics', this.request.publicKey]);
  }

}
