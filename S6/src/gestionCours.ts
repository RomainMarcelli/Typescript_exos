import { alerter, logger } from "./mon-module/index.js";

export interface Etudiant {
    id: number;
    nom: string;
    niveau: string;
}

export enum NiveauCours {
    Debutant,
    Intermediaire,
    Avance,
}

export interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours;
}

export interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}

export class GestionCours {
    private cours: Cours[] = [];
    private inscriptions: { [code: string]: Etudiant[] } = {};

    ajouterCours(cours: Cours): void { 
        this.cours.push(cours);
        this.inscriptions[cours.code] = [];
    }

    inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
        const cours = this.cours.find(c => c.code === coursCode);
        
        if (!cours) {
            alerter(`Le cours avec le code ${coursCode} n'existe pas.`);
            return;
        }

        this.inscriptions[coursCode].push(etudiant);
        logger(`Inscription réussie : ${etudiant.nom} dans ${cours.titre}`);
    }

    afficherInscriptions(): void {
        console.log("Liste des inscriptions :");
        for (const code in this.inscriptions) {
            if (this.inscriptions.hasOwnProperty(code)) {
                console.log(`Cours : ${code}`);
                this.inscriptions[code].forEach((etudiant: Etudiant) => {
                    console.log(`  - ${etudiant.nom} (${etudiant.niveau})`);
                });
            }
        }
    }
}
