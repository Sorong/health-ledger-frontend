import { User } from '../../models/user.model.interface';
import { RequestForm } from '../../models/requestForm.model';

import {REQUESTS} from './mock-requests';

export const USERS: User[] = [
  {publicKey: '1337', request: REQUESTS},
];
