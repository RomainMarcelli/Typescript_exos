import { afficherPersonne, personne1, afficherPersonneAvancee, personne2, personne3} from "./personne.js";

afficherPersonne(personne1);

// EP2 : 3. TEST
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);

// EP3 

import { PersonnePro, afficherInfoProfessionnelle } from "./personnePro.js";

const employe1: PersonnePro = {
    nom: "Alice",
    poste: "Développeuse"
};

const client1: PersonnePro = {
    nom: "Bob",
    entreprise: "TechCorp"
};


afficherInfoProfessionnelle(employe1); // Employé: Alice travaille comme Développeuse.
afficherInfoProfessionnelle(client1);