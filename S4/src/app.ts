// EP1

import { Animal } from "./animaux.js";

const leo = new Animal("Rom1");
leo.seDeplacer();


// EP2

import { Chien, Chat, faireSeDeplacer } from "./animaux.js";

const animaux = [
    new Chien("Rex"),
    new Chat("Miaou")
];

faireSeDeplacer(animaux);

// EP3

import { Rectangle, Cercle } from "./formes.js";

const rectangle = new Rectangle(10, 5);
console.log(`Surface du rectangle : ${rectangle.calculerSurface()}`);

const cercle = new Cercle(7);
console.log(`Surface du cercle : ${cercle.calculerSurface()}`);
