// EP1

export interface IAnimal {
    nom: string;
    seDeplacer(): void;
}

export class Animal implements IAnimal {
    constructor(public nom: string) {}

    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}

// EP2

export class Chien extends Animal {
    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court.`);
    }
}

export class Chat extends Animal {
    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute.`);
    }
}

export function faireSeDeplacer(animaux: IAnimal[]): void {
    animaux.forEach(animal => animal.seDeplacer());
}
