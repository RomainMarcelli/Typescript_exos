// EP1
export function traiterValeur(valeur: string | number): number {
    if (typeof valeur === "string") {
        return valeur.length; // Retourne la longueur de la chaîne
    } else {
        return valeur * 2; // Retourne le double du nombre
    }
}
