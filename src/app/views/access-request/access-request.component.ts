import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RequestService} from '../../services/request.service';
import {Router} from '@angular/router';
import {Request} from '../../models/request.model';
import { StateService } from '../../services/state.service';
import { Result } from '../../models/result.model';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})
export class AccessRequestComponent implements OnInit {
  isPatient = false;
  ds = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }

  constructor(private router: Router, 
              private requestService:RequestService,
              private stateService:StateService) {
    this.isPatient = stateService.user.type == "Patient";
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.requestService.get().subscribe(obs => {
      obs = obs.sort((a , b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      this.ds = new MatTableDataSource(obs);
    });
  }

  showScanner(){
    this.router.navigate(['/qr-code-scanner']);
  }

  showResult(request: Request) {
    this.router.navigate(['./access-request-result', request.id]);
  }

  accept(request:Request) {
    this.router.navigate(['./access-request-details-user', request.id]);
  }
  
  decline(request:Request) {
    let result:Result = {
      rejected: true,
      reason: 'abgelehnt',
      treatment: null
    };

    this.requestService.put(request.publicKey, request.id,  result).subscribe(res=>{
      this.reloadData();
    });
  }
}
