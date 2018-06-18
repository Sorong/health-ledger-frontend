import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {StateService} from '../../services/state.service';
import {RequestForm} from '../../models/requestForm.model';

@Component({
  selector: 'app-access-request-details',
  templateUrl: './access-request-details.component.html',
  styleUrls: ['./access-request-details.component.css']
})
export class AccessRequestDetailsComponent implements OnInit {
  key = '';
  name = '';
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  detailsCategory = new FormControl('', [Validators.required]);
  details = [
    {name: 'Alles'},
    {name: 'Allergie'},
    {name: 'Akute Erkrankungen'},
    {name: 'Chronische Erkrankungen'},
    {name: 'Sonstiges'}
  ];

  treatment: boolean = true;
  attestation: boolean = true;
  recipe: boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stateService: StateService,
              private requestService: RequestService) {
    this.route.params.map(p => p.key).subscribe(key => this.key = key );
    this.route.params.map(p => p.name).subscribe(name => this.name = name );
  }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['./qr-code-scanner']);
  }

  onSave() {
    var request:RequestForm = {
      id:null,
      date:null,
      publicKey: this.key,
      name: this.name,
      note: this.detailsCategory.value.name,
      since: this.date.value,
      treatment:this.treatment,
      attestation:this.attestation,
      recipe:this.recipe,
      result:null
    };

    this.requestService.post(this.key, request).subscribe(res => {
      this.router.navigate(['./access-requests']);
    });

  }

}
