export function premierElement<T>(tableau: T[]): T | undefined {
    return tableau.length > 0 ? tableau[0] : undefined;
}

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

export interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

// 3 - Création d'un objet respectant l'interface Voiture
export const maVoiture: Voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2022
};