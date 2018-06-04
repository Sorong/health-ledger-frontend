import { Treatment } from '../models/treatment.model';

export class Result {
  rejected: boolean;
  reason: string;
  treatment: Array<Treatment>;
}
