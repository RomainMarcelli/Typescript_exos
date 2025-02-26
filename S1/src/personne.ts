// 2 - Définition de l'interface :
export interface Personne {
    name: string;
    age: number;
}

// 3 - Implémentation d'une fonction d'affichage :
export function afficherPersonne(personne: Personne) {
    console.log(`Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans.`);
}

// 4 - Création d'un objet et appel de la fonction :
export const personne1: Personne = { name: "Alice", age: 25 };
