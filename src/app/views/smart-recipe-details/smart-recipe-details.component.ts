import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Treatment} from '../../models/treatment.model';
import {RestServiceService} from '../../services/restService/rest-service.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-smart-recipe-details',
  templateUrl: './smart-recipe-details.component.html',
  styleUrls: ['./smart-recipe-details.component.css']
})
export class SmartRecipeDetailsComponent implements OnInit {
  rest = new RestServiceService();
  treatment: Treatment;
  constructor(private route: ActivatedRoute) {
    this.route.params.map(p => p.id).subscribe(id => {
      this.rest.getTreatments(null).subscribe(obs => this.refreshData(obs, id));
    });
  }

  ngOnInit() {
  }

  refreshData(obs: Treatment[], id: string) {
    this.treatment = obs.filter(entry => entry['id'] === id)[0];
  }
}
