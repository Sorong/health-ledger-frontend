import { Treatment } from '../models/treatment.model';
import { Participant } from '../models/participant.model.interface';
import { RequestForm } from  '../models/requestForm.model';

export class Patient implements Participant {
	publicKey: string;
    treatment: Array<Treatment>;
    request: Array<RequestForm>;
}