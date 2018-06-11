import { Prescription } from './prescription.model';
import { Attestation } from '../models/attestation.model';

export class Treatment{
	id: string;
	category: Category;
	diagnose: string;
	prescription: Prescription;
	attestation: Attestation;
}

export enum Category{
	foo = "Foo", 
	bar = "bar", 
	baz = "baz"
}
