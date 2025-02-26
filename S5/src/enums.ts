// EP2

export enum Direction {
    Nord,
    Sud,
    Est,
    Ouest
}

export function vecteurDirection(direction: Direction): [number, number] {
    switch (direction) {
        case Direction.Nord:
            return [0, 1];
        case Direction.Sud:
            return [0, -1];
        case Direction.Est:
            return [1, 0];
        case Direction.Ouest:
            return [-1, 0];
    }
}

// EP3

export function deplacer(point: [number, number], direction: Direction): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}
