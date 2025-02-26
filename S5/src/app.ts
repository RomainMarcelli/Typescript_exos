// EP1

import { creerScore, afficherScore } from "./tuples.js";

const score = creerScore();
afficherScore(score);


// EP2 

import { Direction, vecteurDirection, deplacer } from "./enums.js";

console.log("Vecteur Nord :", vecteurDirection(Direction.Nord));
console.log("Vecteur Sud :", vecteurDirection(Direction.Sud));
console.log("Vecteur Est :", vecteurDirection(Direction.Est));
console.log("Vecteur Ouest :", vecteurDirection(Direction.Ouest));


// EP3

let point: [number, number] = [5, 5];

console.log("Position initiale :", point);

point = deplacer(point, Direction.Nord);
console.log("Après déplacement vers le Nord :", point);

point = deplacer(point, Direction.Est);
console.log("Après déplacement vers l'Est :", point);

point = deplacer(point, Direction.Sud);
console.log("Après déplacement vers le Sud :", point);

point = deplacer(point, Direction.Ouest);
console.log("Après déplacement vers l'Ouest :", point);
