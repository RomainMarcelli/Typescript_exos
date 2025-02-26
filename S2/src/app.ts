import { premierElement } from "./generics(2).js";

const nombres: number[] = [10, 20, 30];
console.log("Premier élément (nombres) :", premierElement(nombres)); // Résultat : 10

const mots: string[] = ["Alice", "Bob", "Charlie"];
console.log("Premier élément (mots) :", premierElement(mots)); // Résultat : "Alice"

interface Produit {
    nom: string;
    prix: number;
}

const produits: Produit[] = [
    { nom: "Ordinateur", prix: 1200 },
    { nom: "Téléphone", prix: 800 }
];

console.log("Premier élément (produits) :", premierElement(produits)); 

const vide: string[] = [];
console.log("Premier élément (vide) :", premierElement(vide)); // Affiche une erreur et retourne undefined
