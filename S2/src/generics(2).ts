//S2 EP1 : 
 
export function premierElement<T>(tableau: T[]): T | undefined {
    if (tableau.length === 0) {
        console.error("Erreur : le tableau ne peut pas être vide.");
        return undefined;
    }
    return tableau[0];
}
