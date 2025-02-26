// EP2 : 1. Extension de l'interface Personne

export interface Adresse {
    rue: string;
    ville: string;
}

// EP1 : 2 - Définition de l'interface :
export interface Personne {
    readonly id: number;
    name: string;
    age: number;
    // // EP2 : 1. Extension de l'interface Personne
    adresse?: Adresse;  // Propriété optionnelle
}

// EP1 : 3 - Implémentation d'une fonction d'affichage :
export function afficherPersonne(personne: Personne) {
    console.log(`Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans.`);
}

// EP1 : 4 - Création d'un objet et appel de la fonction :
export const personne1: Personne = { id: 1, name: "Alice", age: 25 };


// EP2 : 2 - Fonction d'affichage avancée :
export function afficherPersonneAvancee(personne: Personne) {
    if (personne.adresse) {
        console.log(`Bonjour, je m'appelle ${personne.name} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    } else {
        console.log(`Bonjour, je m'appelle ${personne.name} (ID: ${personne.id}) et j'ai ${personne.age} ans.`);
    }
}

// EP2 :3 - Test 
export const personne2: Personne = { 
    id: 2,
    name: "Dilan", 
    age: 25,
    adresse: { 
        rue: "10 rue des Lilas", 
        ville: "Paris" 
    }
};

// EP2 :3 - Test 
export const personne3: Personne = { 
    id: 3,
    name: "Bob", 
    age: 30
};
