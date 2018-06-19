import {Prescription} from './prescription.model';
import {Attestation} from '../models/attestation.model';
import {Diagnose} from './diagnose.model';

import { v4 as uuid } from 'uuid';

export class Treatment {
  id: string;
  date: Date;
  doctor: string;
  diagnose: Diagnose;
  prescription: Prescription;
  attestation: Attestation;

  constructor() {
    this.id = uuid();
    this.date = new Date();
  }
}