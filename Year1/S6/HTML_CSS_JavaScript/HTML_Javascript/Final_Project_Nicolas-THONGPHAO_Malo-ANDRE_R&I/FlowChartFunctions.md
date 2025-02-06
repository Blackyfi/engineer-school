flowchart TD
    A[Demarrage - initialiserJeu] 
    B[Fenetre Pseudo]
    C[Validation - validerPseudo]
    D[Interface Principale]
    E[Configuration]
    F[Partie en Cours]
    G[Fin de Partie]

    A --> B
    B --> C
    C --> D
    C --> |Pseudo invalide| B
    D --> E
    E --> |Demarrer| F
    F --> |Temps ecoule| G
    F --> |Arreter| D
    F --> |Pause| F
    G --> D