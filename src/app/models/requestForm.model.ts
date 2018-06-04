import { Result } from '../models/result.model'

export class RequestForm{
    id: string;
    requester: string;
    requesterPublicKey: string;
    note: string;
    duration: number;
    treatment: boolean;
    attestation: boolean;
    recipe: boolean;
    Result: Result;
}