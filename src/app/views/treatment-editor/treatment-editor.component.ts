import { Component, OnInit, Input } from '@angular/core';
import { Treatment } from '../../models/treatment.model';

@Component({
  selector: 'app-treatment-editor',
  templateUrl: './treatment-editor.component.html',
  styleUrls: ['./treatment-editor.component.css']
})
export class TreatmentEditorComponent implements OnInit {

  @Input()
  treatment:Treatment;

  constructor() { }

  ngOnInit() {
  }

}
