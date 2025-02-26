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