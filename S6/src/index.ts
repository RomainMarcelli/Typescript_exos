// EP2 

import { GestionCours, Etudiant, Cours, NiveauCours } from "./gestionCours.js";

const gestionCours = new GestionCours();

const cours1: Cours = { code: "JS101", titre: "Introduction à JavaScript", niveau: NiveauCours.Debutant };
const cours2: Cours = { code: "TS202", titre: "Approfondissement TypeScript", niveau: NiveauCours.Intermediaire };

gestionCours.ajouterCours(cours1);
gestionCours.ajouterCours(cours2);

const etudiant1: Etudiant = { id: 1, nom: "Alice", niveau: "Licence" };
const etudiant2: Etudiant = { id: 2, nom: "Bob", niveau: "Master" };

gestionCours.inscrireEtudiant("JS101", etudiant1);
gestionCours.inscrireEtudiant("TS202", etudiant2);
gestionCours.inscrireEtudiant("TS999", etudiant1); // Erreur : cours inexistant

gestionCours.afficherInscriptions();
