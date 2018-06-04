import Perscription from '../models/perscription.model';

export class Treatment{
	id: string;
	category: Category;
	diagnose: string;
	prescription: Perscription;
	attestation: Attestation;
}

enum Category{foo, bar, baz}
