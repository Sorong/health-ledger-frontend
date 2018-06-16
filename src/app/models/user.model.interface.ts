import { RequestForm } from '../models/requestForm.model';

export interface User {
    name?: string;
    type?: string;
    publicKey: string;
    request: Array<RequestForm>;
}
