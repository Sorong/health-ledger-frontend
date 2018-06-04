import Result from './result.model';

export class Request{
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
