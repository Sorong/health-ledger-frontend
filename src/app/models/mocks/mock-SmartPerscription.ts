import { Perscription } from '../perscription.model';

export const PERSCRIPTIONS: Perscription[] = [
  { drug: 'abc', patient_name: 'Mr. Nice', doctor_name: 'Dr IQ', until_date: '1995-12-17T03:24:00', note: 'Nicht alle auf einmal essen', redeemed: true},
  { drug: 'bcd', patient_name: 'foo', doctor_name: 'Dr IQ', until_date: '1996-02-06T06:18:00', note: 'Plazebo, Dosierung beliebig', redeemed: false},
  { drug: 'cde', patient_name: 'bar', doctor_name: 'Dr IQ', until_date: '1997-12-17T03:24:00', note: 'Nicht alle auf einmal essen', redeemed: true},
  { drug: 'def', patient_name: 'baz', doctor_name: 'Dr IQ', until_date: '1998-12-17T03:24:00', note: 'Nicht alle auf einmal essen', redeemed: false},
  { drug: 'efg', patient_name: 'foobar', doctor_name: 'Dr IQ', until_date: '1999-12-17T03:24:00', note: 'Nicht alle auf einmal essen', redeemed: true},
  { drug: 'fgh', patient_name: 'foobarbaz', doctor_name: 'Dr IQ', until_date: '2000-12-17T03:24:00', note: 'Nicht alle auf einmal essen', redeemed: false},
  
];
