// EP3 : 1 - Création de deux interfaces :

export interface Employe {
    nom: string;
    poste: string;
}

export interface Client {
    nom: string;
    entreprise: string;
}

// EP3: 2 - Définition d’un type union :

export type PersonnePro = Employe | Client;


// EP3: 3 - Fonction avec Narrowing
export function afficherInfoProfessionnelle(personne: PersonnePro): void {
    if ("poste" in personne) {
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    } else if ("entreprise" in personne) {
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}

export const employe1: PersonnePro = {
    nom: "Alice",
    poste: "Développeuse"
};

export const client1: PersonnePro = {
    nom: "Bob",
    entreprise: "TechCorp"
};