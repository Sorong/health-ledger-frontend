import { Perscription } from '../models/perscription.model';
import { Attestation } from '../models/attestation.model';

export class Treatment{
	id: string;
	category: Category;
	diagnose: string;
	prescription: Perscription;
	attestation: Attestation;
}

enum Category{foo, bar, baz}
