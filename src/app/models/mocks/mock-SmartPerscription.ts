import {Prescription} from '../prescription.model';

export const PRESCRIPTIONS: Prescription[] = [
  {drug: 'abc', dosage: '1x täglich oral', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: true},
  {drug: 'bcd', dosage: '2x täglich rektal', until_date: new Date(), note: 'Plazebo, Dosierung beliebig', redeemed: false},
  {drug: 'cde', dosage: '3x täglich oral', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: true},
  {drug: 'def', dosage: '4x täglich rektal', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: false},
  {drug: 'efg', dosage: '5x täglich oral', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: true},
  {drug: 'fgh', dosage: '6x täglich rektal', until_date: new Date(), note: 'Nicht alle auf einmal essen', redeemed: false},
];
