import { Participant } from '../models/participant.model.interface'
import { RequestForm } from '../models/requestForm.model'

export class Employer implements Participant{
    publicKey: string;
    Request: Array<RequestForm>
}