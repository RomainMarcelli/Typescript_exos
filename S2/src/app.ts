//S2 EP1 

// import { premierElement } from "./generics.js";

// const nombres: number[] = [10, 20, 30];
// console.log("Premier élément (nombres) :", premierElement(nombres)); 

// const mots: string[] = ["Alice", "Bob", "Charlie"];
// console.log("Premier élément (mots) :", premierElement(mots)); 

// interface Produit {
//     nom: string;
//     prix: number;
// }

// const produits: Produit[] = [
//     { nom: "Ordinateur", prix: 1200 },
//     { nom: "Téléphone", prix: 800 }
// ];

// console.log("Premier élément (produits) :", premierElement(produits)); 

// const vide: string[] = [];
// console.log("Premier élément (vide) :", premierElement(vide)); // Résultat : undefined


// S2 : EP2
import { premierElement, nombres, mots, produits, vide } from "./generics(2).js";

// 1 - Test avec un tableau de nombres
console.log("Premier élément (nombres) :", premierElement(nombres)); // Résultat : 10

// 2 - Test avec un tableau de chaînes
console.log("Premier élément (mots) :", premierElement(mots)); // Résultat : "Alice"

// 3 - Test avec un tableau d'objets
console.log("Premier élément (produits) :", premierElement(produits)); 
// Résultat : { nom: "Ordinateur", prix: 1200 }

// 4 - Test avec un tableau vide
console.log("Premier élément (vide) :", premierElement(vide)); 
// Résultat attendu : "Erreur : le tableau ne peut pas être vide." + undefined
