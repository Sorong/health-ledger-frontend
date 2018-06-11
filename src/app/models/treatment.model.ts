import {Prescription} from './prescription.model';
import {Attestation} from '../models/attestation.model';

export class Treatment {
  id: string;
  category: Category;
  issue_date: Date;
  patient_name: string;
  doctor_name: string;
  diagnose: string;
  prescription: Prescription;
  attestation: Attestation;
}

export enum Category {
  foo = 'Foo',
  bar = 'bar',
  baz = 'baz'
}
