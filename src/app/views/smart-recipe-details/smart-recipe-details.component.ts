import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Treatment} from '../../models/treatment.model';
import 'rxjs/add/operator/map';
import {TreatmentService} from '../../services/treatment.service';

@Component({
  selector: 'app-smart-recipe-details',
  templateUrl: './smart-recipe-details.component.html',
  styleUrls: ['./smart-recipe-details.component.css']
})
export class SmartRecipeDetailsComponent implements OnInit {

  treatment: Treatment;

  constructor(private route: ActivatedRoute, private treatmentService: TreatmentService, private router: Router) {
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
