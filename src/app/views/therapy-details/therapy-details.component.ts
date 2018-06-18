import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Treatment} from '../../models/treatment.model';
import {TreatmentService} from '../../services/treatment.service';

@Component({
  selector: 'app-therapy-details',
  templateUrl: './therapy-details.component.html',
  styleUrls: ['./therapy-details.component.css']
})
export class TherapyDetailsComponent implements OnInit {

  treatment: Treatment;
  constructor(private route: ActivatedRoute, private treatmentService:TreatmentService, private router : Router) {
    this.route.params.map(p => p.id).subscribe(id => {
      this.treatmentService.get().subscribe(obs => this.refreshData(obs, id));
    });
  }

  ngOnInit() {
  }

  refreshData(obs: Treatment[], id: string) {
    this.treatment = obs.filter(entry => entry['id'] === id)[0];
  }

  back() {
    this.router.navigate(['./login']);
  }
}
