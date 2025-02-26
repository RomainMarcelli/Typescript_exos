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
