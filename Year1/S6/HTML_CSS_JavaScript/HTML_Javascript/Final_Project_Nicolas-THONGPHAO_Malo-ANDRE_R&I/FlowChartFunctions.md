```mermaid
flowchart TD
    A["initialiserJeu
    Désactive les contrôles et prépare le jeu"]
    B["initialiserAudio
    Configure le volume et l'état de la musique"]
    C["mettreAJourEtatMusique
    Active/désactive la musique"]
    D["validerPseudo
    Vérifie et enregistre le pseudo"]
    E["demarrerPartie
    Initialise les paramètres de jeu"]
    F["lancerChronometre
    Gère le décompte du temps"]
    G["genererMots
    Crée périodiquement des mots"]
    H["creerElementMot
    Place un mot dans la zone de jeu"]
    I["verifierMot
    Compare le mot saisi avec les mots actifs"]
    J["basculerPause
    Met le jeu en pause/reprend"]
    K["arreterPartie
    Arrête la partie en cours"]
    L["terminerPartie
    Finalise la partie quand le temps est écoulé"]
    M["mettreAJourTableauScores
    Ajoute le nouveau score"]
    N["afficherTableauScores
    Montre les meilleurs scores"]

    A --> B
    B --> C
    A --> N
    D --> E
    E --> F
    E --> G
    G --> H
    I --> M
    J --> C
    K --> N
    K --> M
    L --> M
    M --> N