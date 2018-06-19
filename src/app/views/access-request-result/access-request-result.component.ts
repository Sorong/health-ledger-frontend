import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/request.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { Treatment } from '../../models/treatment.model';

@Component({
  selector: 'app-access-request-result',
  templateUrl: './access-request-result.component.html',
  styleUrls: ['./access-request-result.component.css']
})
export class AccessRequestResultComponent implements OnInit {
  request:Request;

  constructor(private requestService:RequestService,
              private route:ActivatedRoute,
              private router: Router) { 

    this.route.params.map(p => p.id).subscribe(id => {
      this.requestService.get().subscribe(requests=>{
        this.request = requests.find(r => r.id == id);

          console.log(this.request)
      });
    });
  }

  ngOnInit() {
  }

  onSelected(treatment:Treatment) {
    
  }
}
