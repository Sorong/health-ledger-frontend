import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Treatment} from '../../models/treatment.model';
import {TreatmentService} from '../../services/treatment.service';

@Component({
  selector: 'app-therapy-details',
  templateUrl: './therapy-details.component.html',
  styleUrls: ['./therapy-details.component.css']
})
export class TherapyDetailsComponent implements OnInit {
  treatmentService = new TreatmentService();
  treatment: Treatment;
  constructor(private route: ActivatedRoute) {
    this.route.params.map(p => p.id).subscribe(id => {
      this.treatmentService.get().subscribe(obs => this.refreshData(obs, id));
    });
  }

  ngOnInit() {
  }

  refreshData(obs: Treatment[], id: string) {
    this.treatment = obs.filter(entry => entry['id'] === id)[0];
  }

}
