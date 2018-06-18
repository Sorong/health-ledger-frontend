import { Result } from '../models/result.model'

export class RequestForm{
    id: string;
    date: Date;

    name: string;
    publicKey: string;

    note: string;
    since: Date;

    treatment: boolean;
    attestation: boolean;
    recipe: boolean;

    result: Result;
}
