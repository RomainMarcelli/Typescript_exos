// EP1: 

import { premierElement } from "./generics.js"; // Importation de la fonction générique

const nombres: number[] = [10, 20, 30, 40];
console.log("Premier élément (nombres) :", premierElement(nombres)); // Résultat attendu : 10

const mots: string[] = ["Alice", "Bob", "Charlie"];
console.log("Premier élément (mots) :", premierElement(mots)); // Résultat attendu : "Alice"

interface Produit {
    nom: string;
    prix: number;
}

const produits: Produit[] = [
    { nom: "Ordinateur", prix: 1200 },
    { nom: "Téléphone", prix: 800 }
];

console.log("Premier élément (produits) :", premierElement(produits)); 
// Résultat attendu : { nom: "Ordinateur", prix: 1200 }

// Test avec un tableau vide
const vide: string[] = [];
console.log("Premier élément (vide) :", premierElement(vide)); // Résultat attendu : undefined
