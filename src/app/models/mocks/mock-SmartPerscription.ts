import { Prescription } from '../prescription.model';

export const PRESCRIPTIONS: Prescription[] = [
  { drug: 'abc', patient_name: 'Mr. Nice', doctor_name: 'Dr IQ', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: true},
  { drug: 'bcd', patient_name: 'foo', doctor_name: 'Dr IQ', until_date: new Date(), note: 'Plazebo, Dosierung beliebig', redeemed: false},
  { drug: 'cde', patient_name: 'bar', doctor_name: 'Dr IQ', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: true},
  { drug: 'def', patient_name: 'baz', doctor_name: 'Dr IQ', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: false},
  { drug: 'efg', patient_name: 'foobar', doctor_name: 'Dr IQ', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: true},
  { drug: 'fgh', patient_name: 'foobarbaz', doctor_name: 'Dr IQ', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: false},

];
