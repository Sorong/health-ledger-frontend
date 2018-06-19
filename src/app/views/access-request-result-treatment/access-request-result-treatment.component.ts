import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-access-request-result-treatment',
  templateUrl: './access-request-result-treatment.component.html',
  styleUrls: ['./access-request-result-treatment.component.css']
})
export class AccessRequestResultTreatmentComponent implements OnInit {

  constructor(private requestService:RequestService,
              private route:ActivatedRoute,
              private router: Router) { 
    
    
  }

  ngOnInit() {
  }

}
