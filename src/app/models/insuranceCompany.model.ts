import { Participant } from '../models/participant.model.interface'
import { RequestForm } from '../models/requestForm.model'

export class InsuranceComapny implements Participant{
    publicKey: string;
    Request: Array<RequestForm>
}