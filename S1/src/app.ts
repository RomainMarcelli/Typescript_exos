// 2 - Définition de l'interface :
interface Personne {
    name : string;
    age :number;
}

// 3 - Implémentation d'une fonction d'affichage :

function afficherPersonne(personne: Personne): void {
    console.log(`Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans.`);
}

//4. Création d'un objet et appel de la fonction 
const personne1: Personne = { name: "Alice", age: 25 };


afficherPersonne(personne1);