// S2 EP2 
export function premierElement<T>(tableau: T[]): T | undefined {
    if (tableau.length === 0) {
        console.error("Erreur : le tableau ne peut pas être vide.");
        return undefined;
    }
    return tableau[0];
}

// 2 - Déclaration des tableaux de test
export const nombres: number[] = [10, 20, 30];
export const mots: string[] = ["Alice", "Bob", "Charlie"];

export interface Produit {
    nom: string;
    prix: number;
}

export const produits: Produit[] = [
    { nom: "Ordinateur", prix: 1200 },
    { nom: "Téléphone", prix: 800 }
];

export const vide: string[] = [];
