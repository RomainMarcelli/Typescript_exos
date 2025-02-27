// EP3

export abstract class Forme {
    abstract calculerSurface(): number;
}

export class Rectangle extends Forme {
    constructor(public largeur: number, public hauteur: number) {
        super();
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

export class Cercle extends Forme {
    constructor(public rayon: number) {
        super();
    }

    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}
