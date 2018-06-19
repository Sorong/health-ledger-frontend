import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/request.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { Treatment } from '../../models/treatment.model';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-access-request-result',
  templateUrl: './access-request-result.component.html',
  styleUrls: ['./access-request-result.component.css']
})
export class AccessRequestResultComponent implements OnInit {
  request:Request;
  isDoctor = false;

  constructor(private requestService:RequestService,
              private stateService:StateService,
              private route:ActivatedRoute,
              private router: Router) { 
    this.isDoctor = this.stateService.user.type == "Arzt";
    this.route.params.map(p => p.id).subscribe(id => {
      this.requestService.get().subscribe(requests=>{
        this.request = requests.find(r => r.id == id);
      });
    });
  }

  ngOnInit() {
  }

  onSelected(treatment:Treatment) {
    
    this.router.navigate(['access-request-result-treatment', this.request.id, treatment.id]);
  }

  onNewTreatment(){
    this.router.navigate(['access-request-treatment-editor', this.request.id]);
  }
}
