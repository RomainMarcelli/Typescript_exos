export function premierElement<T>(tableau: T[]): T | undefined {
    return tableau.length > 0 ? tableau[0] : undefined;
}
