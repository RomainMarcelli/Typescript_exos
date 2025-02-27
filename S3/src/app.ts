// EP1

import { traiterValeur } from "./narrowing.js";

const resultat1 = traiterValeur("Hello");
console.log("Longueur de la chaîne :", resultat1); 

const resultat2 = traiterValeur(5);
console.log("Double du nombre :", resultat2); 


// EP2

import { Rectangle, Cercle, afficherSurface } from "./formes.js";

const monRectangle = new Rectangle(12, 12);
const monCercle = new Cercle(8);

afficherSurface(monRectangle); 
afficherSurface(monCercle); 


// EP3

import { afficherVehicule } from "./vehicule.js";

const voitureValide = { marque: "BMW", annee: 2022 };

const objetInvalide = { marque: "Tesla", annee: "2021" }; 

afficherVehicule(voitureValide); 
afficherVehicule(objetInvalide); 
afficherVehicule("pas un objet"); 
