import {Prescription} from './prescription.model';
import {Attestation} from '../models/attestation.model';
import {Diagnose} from './diagnose.model';

export class Treatment {
  id: string;
  issue_date: Date;
  patient_name: string;
  doctor_name: string;
  diagnose: Diagnose;
  prescription: Prescription;
  attestation: Attestation;
}

