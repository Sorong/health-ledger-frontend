import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../models/request.model';
import { Treatment } from '../../models/treatment.model';

@Component({
  selector: 'app-access-request-result-treatment',
  templateUrl: './access-request-result-treatment.component.html',
  styleUrls: ['./access-request-result-treatment.component.css']
})
export class AccessRequestResultTreatmentComponent implements OnInit {
  request:Request;
  treatment:Treatment;

  constructor(private requestService:RequestService,
              private route:ActivatedRoute,
              private router: Router) { 
    
    this.route.params.map(p => p.request).subscribe(requestId => {
      this.route.params.map(p => p.treatment).subscribe(treatmentId => {
        this.requestService.get().subscribe(requests => {
          this.request = requests.find(r => r.id == requestId);
          this.treatment = this.request.Result.treatment.find(t => t.id == treatmentId);

          console.log(this.treatment);
        });
      });
    });
  }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate(['/access-request-result', this.request.id]);
  }

}
