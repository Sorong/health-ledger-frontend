import { Treatment } from '../models/treatment.model';
import { User } from '../models/user.model.interface';
import { RequestForm } from  '../models/requestForm.model';

export class Patient implements User {
	publicKey: string;
    treatment: Array<Treatment>;
    request: Array<RequestForm>;
}