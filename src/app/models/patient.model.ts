import { Treatment }from '../models/treatment.model';

export class Patient implements Participant {
	publicKey: string;
    treatment: Array<Treatment>;
}