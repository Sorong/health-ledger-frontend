import { User } from '../models/user.model.interface'
import { RequestForm } from '../models/requestForm.model'

export class Doctor implements User{
    publicKey: string;
    request: Array<RequestForm>
}