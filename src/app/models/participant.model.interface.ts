import { RequestForm } from '../models/requestForm.model';

export interface Participant {
    publicKey: string;
    request: Array<RequestForm>;
}
