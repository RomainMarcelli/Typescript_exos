//S2 EP1 : 

export interface Produit {
    nom: string;
    prix: number;
}

export function premierElement<T>(tableau: T[]): T | undefined {
    return tableau.length > 0 ? tableau[0] : undefined;
}



export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}