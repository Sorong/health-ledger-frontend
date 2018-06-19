import {Result} from '../models/result.model';

import { v4 as uuid } from 'uuid';

export class Request {
  id: string;
  date: Date;

  name: string;
  publicKey: string;

  title: string;
  since: Date;

  treatment: boolean;
  attestation: boolean;
  recipe: boolean;

  Result: Result;

  constructor() {
    this.id = uuid();
    this.date = new Date();
  }
}
