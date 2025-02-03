// Configuration par difficulté
const CONFIG = {
    facile: { intervalle: 3000, longueurMaxMot: 5 },
    moyen: { intervalle: 2000, longueurMaxMot: 7 },
    difficile: { intervalle: 1000, longueurMaxMot: 100 }
};

// Liste des mots (à étendre)
const Neutre = [
    'bonjour', 'aurevoir', 'wow', 'programmation', 'ordinateur',
    'jeu', 'voiture', 'roulade', 'incroyable', 'web', 'salut',
    'damn', 'pratique', 'backflip', 'clavier', 'internet',
    'anticonstitutionnellement', 'application', 'rapide', 'joueur'
];

const Pays = [
    'Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne',
    'Andorre', 'Angola', 'Antigua-et-Barbuda', 'Arabie Saoudite', 'Argentine',
    'Armenie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas',
    'Bahreïn', 'Bangladesh', 'Barbade', 'Belgique', 'Belize',
    'Bénin', 'Bhoutan', 'Biélorussie', 'Bolivie', 'Bosnie-Herzégovine',
    'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 'Burkina Faso',
    'Burundi', 'Cambodge', 'Cameroun', 'Canada', 'Cap-Vert',
    'Centrafrique', 'Chili', 'Chine', 'Chypre', 'Colombie',
    'Comores', 'Congo', 'Congo-Brazzaville', 'Corée du Nord', 'Corée du Sud',
    'Costa Rica', 'Croatie', 'Cuba', 'Danemark', 'Djibouti',
    'Dominique', 'Égypte', 'El Salvador', 'Équateur', 'Érythrée',
    'Espagne', 'Estonie', 'Eswatini', 'États-Unis', 'Éthiopie',
    'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie',
    'Géorgie', 'Ghana', 'Grèce', 'Grenade', 'Guatemala',
    'Guinée', 'Guinée-Bissau', 'Guyana', 'Haïti', 'Honduras',
    'Hongrie', 'Inde', 'Indonésie', 'Irak', 'Iran',
    'Irlande', 'Islande', 'Israël', 'Italie', 'Jamaïque',
    'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kirghizistan',
    'Kiribati', 'Koweït', 'Laos', 'Lesotho', 'Lettonie',
    'Liban', 'Liberia', 'Libye', 'Liechtenstein', 'Lituanie',
    'Luxembourg', 'Madagascar', 'Malaisie', 'Malawi', 'Maldives',
    'Mali', 'Malte', 'Mariannes', 'Maroc', 'Marshall',
    'Maurice', 'Mauritanie', 'Mexique', 'Micronésie', 'Moldavie',
    'Monaco', 'Mongolie', 'Mozambique', 'Namibie', 'Nauru',
    'Népal', 'Nicaragua', 'Niger', 'Nigeria', 'Niue',
    'Norvège', 'Nouvelle-Zélande', 'Oman', 'Ouganda', 'Ouzbékistan',
    'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay',
    'Pays-Bas', 'Pérou', 'Philippines', 'Pologne', 'Portugal',
    'Qatar', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda',
    'Saint-Kitts-et-Nevis', 'Saint-Marin', 'Saint-Vincent-et-les-Grenadines', 'Sainte-Lucie', 'Samoa',
    'Sao Tomé-et-Principe', 'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone',
    'Singapour', 'Syrie', 'Somalie', 'Sri Lanka', 'Suède',
    'Suisse', 'Soudan', 'Soudan du Sud', 'Sri Lanka', 'Suriname',
    'Syrie', 'Tadjikistan', 'Taïwan', 'Tanzanie', 'Tchad',
    'Thaïlande', 'Timor oriental', 'Togo', 'Trinité-et-Tobago', 'Tunisie',
    'Turkménistan', 'Turquie', 'Tuvalu', 'Ukraine', 'Uruguay',
    'Vanuatu', 'Vatican', 'Venezuela', 'Vietnam', 'Yémen',
    'Zambie', 'Zimbabwe'
];

const Animaux = [
    'Aigle', 'Anaconda', 'Antilope', 'Ape', 'Araignée',
    'Autruche', 'Baleine', 'Bison', 'Blaireau', 'Boeuf',
    'Buffle', 'Cacatoès', 'Caiman', 'Calmar', 'Caméléon',
    'Canard', 'Capybara', 'Caribou', 'Cheetah', 'Chien',
    'Chinchilla', 'Cicada', 'Cigogne', 'Cobra', 'Colibri',
    'Corbeau', 'Coyote', 'Crabe', 'Crocodile', 'Dauphin',
    'Dromadaire', 'Dune', 'Écureuil', 'Eléphant', 'Émeu',
    'Encyclopédie', 'Fennec', 'Fouine', 'Gagnon', 'Girafe',
    'Gorille', 'Hérisson', 'Hippocampe', 'Hippopotame', 'Hirondelle',
    'Hummingbird', 'Iguane', 'Impala', 'Jaguar', 'Jellyfish',
    'Koala', 'Kangourou', 'Kangourou', 'Lama', 'Léopard',
    'Loutre', 'Marmotte', 'Mésange', 'Mille-pattes', 'Morse',
    'Narval', 'Nautile', 'Nettoyeur', 'Oie', 'Oiseau',
    'Orang-outan', 'Orque', 'Panthère', 'Paon', 'Panda',
    'Perroquet', 'Phacochère', 'Phoque', 'Pigeon', 'Pingouin',
    'Poisson', 'Porc-épic', 'Poule', 'Puma', 'Putois',
    'Python', 'Quokka', 'Raie', 'Raton laveur', 'Requin',
    'Renard', 'Rhinocéros', 'Serpent', 'Singe', 'Sparrow',
    'Souris', 'Sphynx', 'Tamarin', 'Tigre', 'Toucan',
    'Tortue', 'Truite', 'Vache', 'Vipère', 'Vulture',
    'Wallaby', 'Wapiti', 'Wombat', 'Zèbre', 'Zébu',
    'Zorille'
];

const Fruits_et_Legumes = [
    'Avocat', 'Banane', 'Pomme', 'Orange', 'Poire',
    'Fraise', 'Pêche', 'Prune', 'Mangue', 'Cerise',
    'Melon', 'Pastèque', 'Kiwi', 'Ananas', 'Raisin',
    'Framboise', 'Mûre', 'Litchi', 'Grenade', 'Mandarine',
    'Papaye', 'Pamplemousse', 'Lime', 'Cassis', 'Coing',
    'Groseille', 'Tomate', 'Carotte', 'Pommes de terre', 'Courgette',
    'Aubergine', 'Poivron', 'Oignon', 'Ail', 'Concombre',
    'Céleri', 'Brocoli', 'Chou', 'Chou-fleur', 'Chou de Bruxelles',
    'Haricot', 'Pois', 'Laitue', 'Épinard', 'Endive',
    'Radis', 'Blette', 'Betterave', 'Fenouil', 'Asperge'
];

// Déclaration de tout ce dont on a besoin niveau variables (à utiliser en priorité pour organiser et nettoyer tout aprés)
let etatJeu = {
    score: 0,
    tempsRestant: 60,
    enCours: false,
    motsActifs: new Set(),
    intervalles: new Map(),
    niveau: 'moyen',
    enPause: false,
    pseudo: '',
    utilisePause: false
};

// Éléments DOM
const elements = {
    score: document.getElementById('compteur-score'),
    temps: document.getElementById('chronometre'),
    zoneJeu: document.getElementById('zone-mots'),
    champSaisie: document.getElementById('saisie-mot'),
    btnDemarrer: document.getElementById('demarrer'),
    btnPause: document.getElementById('pause'),
    btnArreter: document.getElementById('arreter'),
    selectNiveau: document.getElementById('niveau'),
    selectDuree: document.getElementById('duree-partie'),
    selectTheme: document.getElementById('theme-mots'),
    listeScores: document.getElementById('liste-scores'),
    modalPseudo: document.getElementById('pourEntrerLePseudo'),
    champPseudo: document.getElementById('champ-pseudo'),
    btnValiderPseudo: document.getElementById('valider-pseudo'),
    nomJoueur: document.getElementById('nom-joueur'),
    musique: document.getElementById('musique-jeu'),
    toggleMusique: document.getElementById('activer-musique')
};

// Gestion de l'audio
function initialiserAudio() {
    const musiqueActive = localStorage.getItem('musiqueActive');
    if (musiqueActive !== null) {
        elements.toggleMusique.checked = musiqueActive === 'true';
    }
    elements.musique.volume = 0.5;
    mettreAJourEtatMusique();
}

function mettreAJourEtatMusique() {
    if (elements.toggleMusique.checked) {
        elements.musique.play().catch(() => {
            console.log('Lecture automatique bloquée par le navigateur');
        });
    } else {
        elements.musique.pause();
    }
    localStorage.setItem('musiqueActive', elements.toggleMusique.checked);
}

// Gestion du pseudo
function validerPseudo() {
    const pseudo = elements.champPseudo.value.trim();
    if (pseudo) {
        etatJeu.pseudo = pseudo;
        elements.nomJoueur.textContent = pseudo;
        elements.modalPseudo.style.display = 'none';
        elements.btnDemarrer.disabled = false;
    } else {
        alert('Veuillez entrer un pseudo valide');
    }
}

// Gestion du jeu
function demarrerPartie() {
    etatJeu = {
        score: 0,
        tempsRestant: parseInt(elements.selectDuree.value),
        enCours: true,
        motsActifs: new Set(),
        intervalles: new Map(),
        niveau: elements.selectNiveau.value,
        enPause: false,
        pseudo: etatJeu.pseudo,
        utilisePause: false
    };

    // Nettoyage et initialisation
    elements.zoneJeu.innerHTML = '';
    elements.score.textContent = '0';
    elements.champSaisie.value = '';
    elements.champSaisie.disabled = false;
    elements.btnDemarrer.disabled = true;
    elements.selectNiveau.disabled = true;
    elements.selectDuree.disabled = true;
    elements.selectTheme.disabled = true;
    elements.btnPause.disabled = false;
    elements.btnArreter.disabled = false;

    // Démarrage de la musique
    if (elements.toggleMusique.checked) {
        elements.musique.play().catch(() => {
            console.log('Lecture automatique bloquée par le navigateur');
        });
    }

    // Sélection du dictionnaire de mots
    const theme = elements.selectTheme.value;
    genererMots(theme);
    lancerChronometre();
}

function lancerChronometre() {
    const intervalleChrono = setInterval(() => {
        if (!etatJeu.enPause && etatJeu.enCours) {
            etatJeu.tempsRestant--;
            elements.temps.textContent = etatJeu.tempsRestant;

            if (etatJeu.tempsRestant <= 0) {
                terminerPartie();
                clearInterval(intervalleChrono);
            }
        }
    }, 1000);
}

function genererMots(theme) {
    const config = CONFIG[etatJeu.niveau];
    let dictionnaire;
    
    // Sélection du dictionnaire selon le thème
    switch(theme) {
        case 'neutre':
            dictionnaire = Neutre;
            break;
        case 'pays':
            dictionnaire = Pays;
            break;
        case 'animaux':
            dictionnaire = Animaux;
            break;
        case 'fruits-legumes':
            dictionnaire = Fruits_et_Legumes;
            break;
        default:
            dictionnaire = Neutre;
    }

    const intervalleGeneration = setInterval(() => {
        if (!etatJeu.enPause && etatJeu.enCours) {
            // Filtrage des mots selon la longueur maximale du niveau
            const motsFiltres = dictionnaire.filter(mot => 
                mot.length <= config.longueurMaxMot && 
                !etatJeu.motsActifs.has(mot.toLowerCase())
            );
            
            // Vérification s'il reste des mots disponibles
            if (motsFiltres.length === 0) {
                console.warn('Plus de mots disponibles pour ce niveau et cette longueur');
                return;
            }
            
            // Sélection aléatoire d'un mot
            const mot = motsFiltres[Math.floor(Math.random() * motsFiltres.length)];
            creerElementMot(mot);
        }
    }, config.intervalle);

    etatJeu.intervalles.set('generation', intervalleGeneration);
}

function creerElementMot(mot) {
    const elementMot = document.createElement('div');
    elementMot.textContent = mot;
    elementMot.classList.add('mot');
    
    // Positionnement aléatoire horizontal avec marge pour éviter le débordement
    const margeSecurite = 20; // pixels de marge pour éviter le débordement
    const maxLeft = elements.zoneJeu.offsetWidth - (elementMot.offsetWidth || 100) - margeSecurite;
    elementMot.style.left = Math.max(margeSecurite, Math.random() * maxLeft) + 'px';
    
    elements.zoneJeu.appendChild(elementMot);
    etatJeu.motsActifs.add(mot);

    // Suppression du mot après un délai
    const intervalle = setTimeout(() => {
        if (elementMot.parentNode) {
            elementMot.classList.add('expire');
            setTimeout(() => {
                elementMot.remove();
                etatJeu.motsActifs.delete(mot);
            }, 500); // Délai pour l'animation d'expiration
        }
    }, 10000); // Durée de vie du mot

    etatJeu.intervalles.set(mot, intervalle);
}

function genererMots(theme) {
    const config = CONFIG[etatJeu.niveau];
    let dictionnaire;
    
    // Sélection du dictionnaire selon le thème
    switch(theme) {
        case 'general':
            dictionnaire = Neutre;
            break;
        case 'pays':
            dictionnaire = Pays;
            break;
        case 'animaux':
            dictionnaire = Animaux;
            break;
        case 'cuisine':
            dictionnaire = Fruits_et_Legumes;
            break;
        default:
            dictionnaire = Neutre;
    }

    const intervalleGeneration = setInterval(() => {
        if (!etatJeu.enPause && etatJeu.enCours) {
            // Filtrage des mots selon la longueur maximale du niveau
            const motsFiltres = dictionnaire.filter(mot => 
                mot.length <= config.longueurMaxMot && 
                !etatJeu.motsActifs.has(mot.toLowerCase())
            );
            
            // Vérification s'il reste des mots disponibles
            if (motsFiltres.length === 0) {
                console.warn('Plus de mots disponibles pour ce niveau et cette longueur');
                return;
            }
            
            // Sélection aléatoire d'un mot
            const mot = motsFiltres[Math.floor(Math.random() * motsFiltres.length)];
            creerElementMot(mot);
        }
    }, config.intervalle);

    etatJeu.intervalles.set('generation', intervalleGeneration);
}

function verifierMot(event) {
    const motTape = event.target.value.trim().toLowerCase();
    
    // Vérification si le mot tapé existe dans les mots actifs (insensible à la casse)
    const motTrouve = Array.from(etatJeu.motsActifs).find(
        mot => mot.toLowerCase() === motTape
    );

    if (motTrouve) {
        const motsElements = document.querySelectorAll('.mot');
        motsElements.forEach(element => {
            if (element.textContent.toLowerCase() === motTape) {
                element.remove();
            }
        });

        clearTimeout(etatJeu.intervalles.get(motTrouve));
        etatJeu.intervalles.delete(motTrouve);
        etatJeu.motsActifs.delete(motTrouve);

        // Attribution des points basée sur la longueur du mot original
        etatJeu.score += motTrouve.length;
        document.getElementById('compteur-score').textContent = etatJeu.score;

        // Réinitialisation du champ de saisie après un court délai
        event.target.value = '';
    }
}
function basculerPause() {
    etatJeu.enPause = !etatJeu.enPause;
    if (etatJeu.enPause) {
        elements.btnPause.textContent = 'Reprendre';
        etatJeu.utilisePause = true;
        if (elements.toggleMusique.checked) {
            elements.musique.pause();
        }
    } else {
        elements.btnPause.textContent = 'Pause';
        if (elements.toggleMusique.checked) {
            elements.musique.play();
        }
    }
    elements.champSaisie.disabled = etatJeu.enPause;
}

function arreterPartie() {
    if (etatJeu.enCours) {
        etatJeu.enCours = false;
        
        // Nettoyage des intervalles
        etatJeu.intervalles.forEach(intervalle => {
            clearTimeout(intervalle);
        });
        
        // Nettoyage interface
        elements.zoneJeu.innerHTML = '';
        elements.musique.pause();
        elements.musique.currentTime = 0;
        
        // Réinitialisation des contrôles
        elements.champSaisie.disabled = true;
        elements.btnDemarrer.disabled = false;
        elements.selectNiveau.disabled = false;
        elements.selectDuree.disabled = false;
        elements.selectTheme.disabled = false;
        elements.btnPause.disabled = true;
        elements.btnArreter.disabled = true;
        elements.btnPause.textContent = 'Pause';
        
        mettreAJourTableauScores();
    }
}

function terminerPartie() {
    etatJeu.enCours = false;
    elements.champSaisie.disabled = true;
    elements.btnDemarrer.disabled = false;
    elements.selectNiveau.disabled = false;
    elements.selectDuree.disabled = false;
    elements.selectTheme.disabled = false;
    elements.btnPause.disabled = true;
    elements.btnArreter.disabled = true;
    
    // Nettoyage
    etatJeu.intervalles.forEach(intervalle => {
        clearTimeout(intervalle);
    });
    
    elements.musique.pause();
    elements.musique.currentTime = 0;
    
    mettreAJourTableauScores();
    
    alert(`Partie terminée ! Votre score : ${etatJeu.score}`);
}

// Gestion des scores
let meilleursScores = JSON.parse(localStorage.getItem('meilleursScores')) || [];

function mettreAJourTableauScores() {
    const nouveauScore = {
        score: etatJeu.score,
        niveau: etatJeu.niveau,
        date: new Date().toLocaleDateString(),
        joueur: etatJeu.pseudo,
        pause: etatJeu.utilisePause
    };
    
    meilleursScores.push(nouveauScore);
    meilleursScores.sort((a, b) => b.score - a.score);
    meilleursScores = meilleursScores.slice(0, 5);
    
    localStorage.setItem('meilleursScores', JSON.stringify(meilleursScores));
    afficherTableauScores();
}

function afficherTableauScores() {
    elements.listeScores.innerHTML = meilleursScores
        .map((score, index) => {
            const pauseTexte = score.pause ? 
                ' <span class="score-pause">(pause)</span>' : '';
            
            const niveaux = {
                'facile': 'Facile',
                'moyen': 'Moyen',
                'difficile': 'Difficile'
            };
            
            return `
                <li class="score-item ${index === 0 ? 'meilleur-score' : ''}">
                    <span class="score-joueur">${score.joueur}</span>
                    <span class="score-points">${score.score} points</span>
                    <span class="score-niveau">${niveaux[score.niveau]}</span>
                    <span class="score-date">${score.date}</span>
                    ${pauseTexte}
                </li>
            `;
        })
        .join('');
}

// Initialisation de base
function initialiserJeu() {
    // Désactivation des contrôles
    elements.champSaisie.disabled = true;
    elements.btnDemarrer.disabled = true;
    elements.btnPause.disabled = true;
    elements.btnArreter.disabled = true;
    
    initialiserAudio();
    afficherTableauScores();
}

// Changement de niveau Handler en gros
function changerNiveau(event) {
    etatJeu.niveau = event.target.value;
    event.target.setAttribute('data-value', event.target.value);
}

// Les event listeners
elements.btnDemarrer.addEventListener('click', demarrerPartie);
elements.btnPause.addEventListener('click', basculerPause);
elements.btnArreter.addEventListener('click', arreterPartie);
elements.champSaisie.addEventListener('input', verifierMot);
elements.selectNiveau.addEventListener('change', changerNiveau);
elements.toggleMusique.addEventListener('change', mettreAJourEtatMusique);
elements.btnValiderPseudo.addEventListener('click', validerPseudo);

// On lance le tout
initialiserJeu();
elements.selectNiveau.setAttribute('data-value', elements.selectNiveau.value);
