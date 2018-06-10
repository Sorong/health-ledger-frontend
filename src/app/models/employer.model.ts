import { User } from '../models/user.model.interface'
import { RequestForm } from '../models/requestForm.model'

export class Employer implements User{
    publicKey: string;
    request: Array<RequestForm>
}