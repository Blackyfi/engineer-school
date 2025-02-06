```mermaid
flowchart TD
    A[initialiserJeu]
    B[initialiserAudio]
    C[mettreAJourEtatMusique]
    D[validerPseudo]
    E[demarrerPartie]
    F[lancerChronometre]
    G[genererMots]
    H[creerElementMot]
    I[verifierMot]
    J[basculerPause]
    K[arreterPartie]
    L[terminerPartie]
    M[mettreAJourTableauScores]
    N[afficherTableauScores]

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