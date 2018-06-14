import {Category, Diagnose} from '../diagnose.model';

export const DIAGNOSES: Diagnose[] = [
  {
    category: Category.bar,
    diagnose: 'Riecht unangenehm nach faulem Rosenkohl'
  },
  {
    category: Category.baz,
    diagnose: 'Riecht unangenehm nach faulem Blumenkohl'
  },
  {
    category: Category.foo,
    diagnose: 'Riecht unangenehm nach faulem Ei'
  },
  {
    category: Category.bar,
    diagnose: 'Riecht unangenehm nach...das erwähne ich hier lieber nicht'
  }
];
