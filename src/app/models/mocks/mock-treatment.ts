import {Treatment, Category} from '../treatment.model';
import {PRESCRIPTIONS} from '../mocks/mock-SmartPerscription';
import {ATTESTATIONS} from '../mocks/mock-attestation';

export const TREATMENT: Treatment[] = [
    {id: "1337",
	    category: Category.bar,
	    diagnose: "Definitely Aids",
	    prescription: PRESCRIPTIONS[0],
        attestation: null,
    },
    {id: "1337",
	    category: Category.baz,
	    diagnose: "Maybe Adis?",
	    prescription: PRESCRIPTIONS[1],
        attestation: ATTESTATIONS[0],
    },
    {id: "1337",
	    category: Category.foo,
	    diagnose: "Super Aids, sorry",
	    prescription: PRESCRIPTIONS[2],
        attestation: ATTESTATIONS[1],
    },
    {id: "1337",
	    category: Category.foo,
	    diagnose: "AIDS!",
	    prescription: PRESCRIPTIONS[3],
        attestation: ATTESTATIONS[2],
    },
    {id: "1337",
	    category: Category.foo,
	    diagnose: "WTF is this even?! (spoiler, it's Aids)",
	    prescription: PRESCRIPTIONS[4],
        attestation: null,
    },
    {id: "1337",
	    category: Category.foo,
	    diagnose: "WUT, just a little Aids",
	    prescription: PRESCRIPTIONS[5],
        attestation: ATTESTATIONS[3],
    }

]