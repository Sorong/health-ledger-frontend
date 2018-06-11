import {Treatment, Category} from '../treatment.model';
import {PRESCRIPTIONS} from '../mocks/mock-SmartPerscription';
import {ATTESTATIONS} from '../mocks/mock-attestation';

export const TREATMENT: Treatment[] = [
  {
    id: '1',
    category: Category.bar,
    issue_date: new Date(0),
    patient_name: 'Mr. Nice', doctor_name: 'Dr IQ',
    diagnose: 'Definitely Aids',
    prescription: PRESCRIPTIONS[0],
    attestation: null,
  },
  {
    id: '2',
    category: Category.baz,
    issue_date: new Date(0),
    patient_name: 'foo', doctor_name: 'Dr IQ',
    diagnose: 'Maybe Adis?',
    prescription: PRESCRIPTIONS[1],
    attestation: ATTESTATIONS[0],
  },
  {
    id: '3',
    category: Category.foo,
    issue_date: new Date(0),
    patient_name: 'bar', doctor_name: 'Dr IQ',
    diagnose: 'Super Aids, sorry',
    prescription: PRESCRIPTIONS[2],
    attestation: ATTESTATIONS[1],
  },
  {
    id: '4',
    category: Category.foo,
    issue_date: new Date(0),
    patient_name: 'baz', doctor_name: 'Dr IQ',
    diagnose: 'AIDS!',
    prescription: PRESCRIPTIONS[3],
    attestation: ATTESTATIONS[2],
  },
  {
    id: '5',
    category: Category.foo,
    issue_date: new Date(0),
    patient_name: 'foobar', doctor_name: 'Dr IQ',
    diagnose: 'WTF is this even?! (spoiler, it\'s Aids)',
    prescription: PRESCRIPTIONS[4],
    attestation: null,
  },
  {
    id: '6',
    category: Category.foo,
    issue_date: new Date(0),
    patient_name: 'foobarbaz', doctor_name: 'Dr IQ',
    diagnose: 'WUT, just a little Aids',
    prescription: PRESCRIPTIONS[5],
    attestation: ATTESTATIONS[3],
  }

];
