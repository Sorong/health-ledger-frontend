import { RequestForm } from '../models/requestForm.model'

export interface Participant{
    publicKey: string;
    Request: Array<RequestForm>
}