// EP1

import { creerScore, afficherScore } from "./tuples.js";

const score = creerScore();
afficherScore(score);


// EP2 

import { Direction, vecteurDirection } from "./enums.js";

console.log("Vecteur Nord :", vecteurDirection(Direction.Nord));
console.log("Vecteur Sud :", vecteurDirection(Direction.Sud));
console.log("Vecteur Est :", vecteurDirection(Direction.Est));
console.log("Vecteur Ouest :", vecteurDirection(Direction.Ouest));
