import { Participant } from '../models/participant.model.interface'
import { RequestForm } from '../models/requestForm.model'

export class Doctor implements Participant{
    publicKey: string;
    request: Array<RequestForm>
}