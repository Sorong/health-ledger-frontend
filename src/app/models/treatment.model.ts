import {Prescription} from './prescription.model';
import {Attestation} from '../models/attestation.model';
import {Diagnose} from './diagnose.model';


export class Treatment {
  id: string;
  date: Date;
  doctor: string;
  diagnose: Diagnose;
  prescription: Prescription;
  attestation: Attestation;
}