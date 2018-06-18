import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {Treatment} from '../../models/treatment.model';
import {StateService} from '../../services/state.service';
import { RequestForm } from '../../models/requestForm.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {
  displayedColumns = ['date', 'category', 'note', 'doctor_name', 'details'];
  dataSource = new MatTableDataSource([]);
  request:RequestForm;
  isDoctor = false;

  constructor(private router: Router, private route: ActivatedRoute, private requestService: RequestService, private stateService: StateService) {
    this.route.params.map(p => p.id).subscribe(id => this.refresh(id));
    this.isDoctor = this.stateService.user.type.toLowerCase() === 'arzt';
  }

  refresh(id) {
    this.requestService.get().subscribe(obs => {
      this.request = obs.find(entry => entry.id === id);
      this.dataSource = new MatTableDataSource(this.request.result.treatment);
    });
  }

  ngOnInit() {
  }

  addDiagnose() {
    this.router.navigate(['./diagnostics', this.request.publicKey]);
  }

}
