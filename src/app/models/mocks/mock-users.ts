import { User } from '../../models/user.model.interface';
import { RequestForm } from '../../models/requestForm.model';

import {REQUESTS} from './mock-requests';

export const USERS: User[] = [
  {name:'Hans', type: 'Patient', publicKey: '1337', request: REQUESTS},
];
