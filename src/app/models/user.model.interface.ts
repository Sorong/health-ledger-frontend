import { RequestForm } from '../models/requestForm.model';

export interface User {
    publicKey: string;
    request: Array<RequestForm>;
}
