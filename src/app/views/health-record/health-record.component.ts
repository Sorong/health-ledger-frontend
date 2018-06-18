import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {Treatment} from '../../models/treatment.model';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {
  displayedColumns = ['date', 'category', 'note', 'doctor_name', 'details'];
  dataSource = new MatTableDataSource([]);
  pub_key = '';
  isDoctor = false;

  constructor(private router: Router, private route: ActivatedRoute, private requestService: RequestService, private stateService: StateService) {
    this.route.params.map(p => p.id).subscribe(key => this.pub_key = key);
    this.isDoctor = this.stateService.user.type.toLowerCase() === 'arzt';
  }

  ngOnInit() {
    this.requestService.get().subscribe(obs => {
        const filtered_obs = obs.filter(entry => entry['publicKey'] === this.pub_key);
        if (filtered_obs.length !== 0 && filtered_obs[0].result !== null ) {
          this.dataSource = new MatTableDataSource(filtered_obs[0].result.treatment);
        } else {
          this.dataSource = new MatTableDataSource([]);
        }
      }
    );
  }

  addDiagnose() {
    this.router.navigate(['./diagnostics', this.pub_key]);
  }

}
