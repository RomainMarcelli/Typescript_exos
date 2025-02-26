import { afficherPersonne, personne1, afficherPersonneAvancee, personne2, personne3} from "./personne.js";

afficherPersonne(personne1);

// EP2 : 3. TEST
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);

// EP3 

import { afficherInfoProfessionnelle, client1, employe1  } from "./personnePro.js";

afficherInfoProfessionnelle(employe1); // Employé: Alice travaille comme Développeuse.
afficherInfoProfessionnelle(client1);