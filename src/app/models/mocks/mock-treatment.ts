import {Treatment} from '../treatment.model';
import {PRESCRIPTIONS} from '../mocks/mock-SmartPerscription';
import {ATTESTATIONS} from '../mocks/mock-attestation';
import {DIAGNOSES} from './mock-diagnose';

export const TREATMENT: Treatment[] = [
  {
    id: '1',
    issue_date: new Date(0),
    patient_name: 'Mr. Nice', doctor_name: 'Dr IQ',
    diagnose: DIAGNOSES[0],
    prescription: PRESCRIPTIONS[0],
    attestation: null,
  },
  {
    id: '2',
    issue_date: new Date(0),
    patient_name: 'foo', doctor_name: 'Dr IQ',
    diagnose: DIAGNOSES[1],
    prescription: PRESCRIPTIONS[1],
    attestation: ATTESTATIONS[0],
  },
  {
    id: '3',
    issue_date: new Date(0),
    patient_name: 'bar', doctor_name: 'Dr IQ',
    diagnose: DIAGNOSES[2],
    prescription: PRESCRIPTIONS[2],
    attestation: ATTESTATIONS[1],
  },
  {
    id: '4',
    issue_date: new Date(0),
    patient_name: 'baz', doctor_name: 'Dr IQ',
    diagnose: DIAGNOSES[0],
    prescription: PRESCRIPTIONS[3],
    attestation: ATTESTATIONS[2],
  },
  {
    id: '5',
    issue_date: new Date(0),
    patient_name: 'foobar', doctor_name: 'Dr IQ',
    diagnose: DIAGNOSES[1],
    prescription: PRESCRIPTIONS[4],
    attestation: null,
  },
  {
    id: '6',
    issue_date: new Date(0),
    patient_name: 'foobarbaz', doctor_name: 'Dr IQ',
    diagnose: DIAGNOSES[0],
    prescription: PRESCRIPTIONS[5],
    attestation: ATTESTATIONS[3],
  }

];
