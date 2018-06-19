import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {StateService} from '../../services/state.service';
import {Request} from '../../models/request.model';

@Component({
  selector: 'app-access-request-details',
  templateUrl: './access-request-details.component.html',
  styleUrls: ['./access-request-details.component.css']
})
export class AccessRequestDetailsComponent implements OnInit {
  
  details = [
    {name: 'Alles'},
    {name: 'Allergie'},
    {name: 'Akute Erkrankungen'},
    {name: 'Chronische Erkrankungen'},
    {name: 'Sonstiges'}
  ];

  request:Request;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stateService: StateService,
              private requestService: RequestService) {

    this.request = new Request();

    this.route.params.map(p => p.key).subscribe(key => this.request.publicKey = key)
    this.route.params.map(p => p.name).subscribe(name => this.request.name = name );
  }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['./qr-code-scanner']);
  }

  onSave() {

    this.requestService.post(this.request.publicKey, this.request).subscribe(res => {
      this.router.navigate(['./access-requests']);
    });

  }

}
