// Configuration du jeu
const configuration = {
	facile: { intervalle: 3000, longueurMot: 5 },
	moyen: { intervalle: 2000, longueurMot: 7 },
	difficile: { intervalle: 1000, longueurMot: 100 }
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
	'Radis', 'Blette', 'Betterave', 'Fenouil', 'Asperge',
	'Artichaut', 'Poireau', 'Navet', 'Patate douce', 'Chou-rave',
	'Maïs', 'Cresson', 'Chicorée', 'Mâche', 'Câpre',
	'Salsifis', 'Taro', 'Fève', 'Rutabaga', 'Panais',
	'Yam', 'Chayote', 'Kale', 'Kohlrabi', 'Moringa',
	'Jackfruit', 'Durian', 'Tamarillo', 'Salak', 'Camu-camu',
	'Sapote', 'Acai', 'Lulo', 'Nashi', 'Cacahuète',
	'Noix de coco', 'Noix', 'Amande', 'Pistache', 'Châtaigne',
	'Pignon de pin', 'Noisette', 'Macadamia', 'Cajou', 'Mango',
	'Orange sanguine', 'Baie d’açaï', 'Paprika', 'Sésame', 'Cresson',
	'Radicchio', 'Kumquat', 'Huitlacoche', 'Acelga', 'Amarante',
	'Gingembre', 'Curcuma', 'Moutarde', 'Basilic', 'Thym',
	'Origan', 'Romarin', 'Menthe', 'Estragon', 'Ciboulette',
	'Persil', 'Aneth', 'Sauge', 'Curry', 'Végétal de soja',
	'Rhubarbe', 'Mûrier', 'Moringa', 'Baobab', 'Pêche de vigne',
	'Plumcot', 'Mirabelle', 'Nectarine', 'Lime', 'Myrtille',
	'Gingembre', 'Yuzu', 'Lime kaffir', 'Mangue verte', 'Cresson',
	'Pomme grenade', 'Citrons', 'Prunelle', 'Légumineuses', 'Haricots verts',
	'Cornichon', 'Radis noir', 'Courge', 'Potiron', 'Butternut',
	'Châtaigne', 'Lentilles', 'Pois chiches', 'Fèves', 'Azuki',
	'Haricot mungo', 'Légume-feuille', 'Bok choy', 'Pak choi', 'Chou chinois',
	'Souspin', 'Cardon', 'Chou de Milan', 'Endive rouge', 'Artichaut violet',
	'Cresson alénois', 'Fenouil', 'Ciboulette'
];


// État du jeu
let etatJeu = {
	score: 0,
	tempsRestant: 60,
	enCours: false,
	motActifs: new Set(),
	intervallesMots: new Map(),
	difficulte: 'moyen',
	enPause: false,
	pseudoJoueur: '',
	aEteMisEnPause: false
};

// Éléments du DOM
const ScoreDeHTML = document.getElementById('score');
const TempsSurHtml = document.getElementById('timer');
const conteneurMots = document.getElementById('words-container');
const champSaisie = document.getElementById('word-input');
const boutonDemarrer = document.getElementById('startGame');
const boutonPause = document.getElementById('pauseGame');
const boutonStop = document.getElementById('stopGame');
const selecteurDifficulte = document.getElementById('difficulty');
const selecteurDuree = document.getElementById('game-duration');
const selecteurMots = document.getElementById('Words');
const listeScores = document.getElementById('highScoresList');
const trucQuiCacheToutPseudo = document.getElementById('username-trucQuiCacheTout');
const champPseudo = document.getElementById('username-input');
const boutonPseudo = document.getElementById('submit-username');
const nomJoueur = document.getElementById('player-name');


// Fonction pour soumettre le nom d'utilisateur
function soumettreNomUtilisateur() {
	const pseudo = champPseudo.value.trim();
	if (pseudo) {
		etatJeu.pseudoJoueur = pseudo;
		nomJoueur.textContent = pseudo;
		trucQuiCacheToutPseudo.style.display = 'none';
		boutonDemarrer.disabled = false;
	} else {
		alert('Veuillez entrer un pseudo valide');
	}
}

// Fonction pour démarrer le jeu
function demarrerJeu() {
	etatJeu = {
		score: 0,
		tempsRestant: parseInt(selecteurDuree.value),
		enCours: true,
		motActifs: new Set(),
		intervallesMots: new Map(),
		difficulte: selecteurDifficulte.value,
		enPause: false,
		pseudoJoueur: etatJeu.pseudoJoueur,
		aEteMisEnPause: false
	};

	// Nettoyage de l'interface
	conteneurMots.innerHTML = '';
	ScoreDeHTML.textContent = '0';
	champSaisie.value = '';
	champSaisie.disabled = false;
	boutonDemarrer.disabled = true;
	selecteurDifficulte.disabled = true;
	selecteurDuree.disabled = true;
	selecteurMots.disabled = true;
	boutonPause.disabled = false;
	boutonStop.disabled = false;

	console.log("caca" + selecteurMots);
	console.log(Object.values(selecteurMots));
	if(selecteurMots.value=="Neutre"){
		genererMots(Neutre);;
	}
	else if(selecteurMots.value=="Pays"){
		genererMots(Pays);
	}
	else if(selecteurMots.value=="Animaux"){
		genererMots(Animaux);
	}
	else{
		genererMots(Fruits_et_Legumes);
	}
	// Démarrage du jeu
	// genererMots(Object.values(selecteurMots));
	demarrerChrono();
}

// Fonction pour le chronomètre
function demarrerChrono() {
	const intervalleChrono = setInterval(function() {
		if (!etatJeu.enPause && etatJeu.enCours) {
			etatJeu.tempsRestant--;
			TempsSurHtml.textContent = etatJeu.tempsRestant;

			if (etatJeu.tempsRestant <= 0) {
				terminerJeu();
				clearInterval(intervalleChrono);
			}
		}
	}, 1000);
}

// Fonction pour générer les mots
function genererMots(listeMots) {
	console.log('Difficulté sélectionnée:', etatJeu.difficulte); // Debugging

	const difficulte = configuration[etatJeu.difficulte] || configuration.moyen; // Par défaut si ça marche pas ça deviens 'moyen'
	console.log('Intervalle de pop:', difficulte); // Debugging    
	const intervalleGeneration = setInterval(function() {
		if (!etatJeu.enPause && etatJeu.enCours) {
			const motsFiltres = listeMots.filter(function(mot) {
				return mot.length <= difficulte.longueurMot;
			});
			const mot = motsFiltres[Math.floor(Math.random() * motsFiltres.length)];
			console.log('Intervalle de pop:', motsFiltres); // Debugging
			creerElementMot(mot);
		}
	}, difficulte.intervalle);
	console.log('Intervalle de pop:', listeMots); // Debugging


	console.log('Intervalle de pop:', difficulte.longueurMot); // Debugging
	
	console.log('Intervalle de pop:', difficulte.intervalle); // Debugging
	console.log('Intervalle de pop:', intervalleGeneration); // Debugging


	etatJeu.intervallesMots.set('generation', intervalleGeneration);
}

// Fonction pour créer un élément mot
function creerElementMot(mot) {
	const elementMot = document.createElement('div');
	elementMot.textContent = mot;
	elementMot.classList.add('word');
	elementMot.style.left = Math.random() * (conteneurMots.offsetWidth - 100) + 'px';
	
	conteneurMots.appendChild(elementMot);
	etatJeu.motActifs.add(mot);

	const intervalle = setTimeout(function() {
		if (elementMot.parentNode) {
			elementMot.classList.add('expired');
			setTimeout(function() {
				elementMot.remove();
				etatJeu.motActifs.delete(mot);
			}, 500);
		}
	}, 10000);

	etatJeu.intervallesMots.set(mot, intervalle);
}

// Fonction pour vérifier le mot
function verifierMot(e) {
	const motTape = e.target.value.trim();

	if (etatJeu.motActifs.has(motTape)) {
		const elements = document.querySelectorAll('.word');
		elements.forEach(function(element) {
			if (element.textContent === motTape) {
				element.remove();
			}
		});

		clearTimeout(etatJeu.intervallesMots.get(motTape));
		etatJeu.intervallesMots.delete(motTape);
		etatJeu.motActifs.delete(motTape);

		etatJeu.score += motTape.length;
		ScoreDeHTML.textContent = etatJeu.score;

		champSaisie.value = '';
	}
}

// Fonction pour basculer la pause
function basculerPause() {
	etatJeu.enPause = !etatJeu.enPause;
	if (etatJeu.enPause) {
		boutonPause.textContent = 'Reprendre';
		etatJeu.aEteMisEnPause = true;
	} else {
		boutonPause.textContent = 'Pause';
	}
	champSaisie.disabled = etatJeu.enPause;
}




// Function pour arrêter le jeu
function arreterJeu() {
	if (etatJeu.enCours) {
		etatJeu.enCours = false;
		
		// Nettoyer les intervalles
		etatJeu.intervallesMots.forEach(function(intervalle) {
			clearTimeout(intervalle);
		});
		
		// Vider le conteneur de mots
		conteneurMots.innerHTML = '';
		
		// Réinitialiser l'interface
		champSaisie.disabled = true;
		boutonDemarrer.disabled = false;
		selecteurDifficulte.disabled = false;
		selecteurDuree.disabled = false;
		selecteurMots.disabled = false;
		boutonPause.disabled = true;
		boutonStop.disabled = true;
		boutonPause.textContent = 'Pause';
		
		// Mettre à jour les scores
		mettreAJourMeilleursScores();
	}
}

// Fonction pour terminer le jeu
function terminerJeu() {
	etatJeu.enCours = false;
	champSaisie.disabled = true;
	boutonDemarrer.disabled = false;
	selecteurDifficulte.disabled = false;
	selecteurDuree.disabled = false;
	selecteurMots.disabled = false;
	boutonPause.disabled = true;
	boutonStop.disabled = true;
	
	// Nettoyer les intervalles
	etatJeu.intervallesMots.forEach(function(intervalle) {
		clearTimeout(intervalle);
	});
	
	// Mettre à jour les scores
	mettreAJourMeilleursScores();
	
	alert('Partie terminée ! Votre score : ' + etatJeu.score);
}

// Initialisation des scores avec fallback
let meilleursScores = JSON.parse(localStorage.getItem('meilleursScores')) || [];

// Fonction pour mettre à jour les meilleurs scores
function mettreAJourMeilleursScores() {
	const nouveauScore = {
		score: etatJeu.score,
		difficulte: etatJeu.difficulte,
		date: new Date().toLocaleDateString(),
		joueur: etatJeu.pseudoJoueur,
		pause: etatJeu.aEteMisEnPause // Simplifié la logique de pause
	};
	
	meilleursScores.push(nouveauScore);
	
	// Trier et garder les 5 meilleurs scores
	meilleursScores.sort((a, b) => b.score - a.score);
	meilleursScores = meilleursScores.slice(0, 5);
	
	// Persister dans le localStorage
	localStorage.setItem('meilleursScores', JSON.stringify(meilleursScores));
	
	// Mettre à jour l'affichage
	afficherMeilleursScores();
}

// Fonction pour afficher les meilleurs scores
function afficherMeilleursScores() {
	listeScores.innerHTML = meilleursScores
		.map((score, index) => {
			const pauseTexte = score.pause ? 
				' <span class="paused-score">(pause)</span>' : '';
			
			const difficulteTraduction = {
				'facile': 'Facile',
				'moyen': 'Moyen',
				'difficile': 'Difficile'
			};
			
			return `
				<li class="score-item ${index === 0 ? 'top-score' : ''}">
					<span class="score-player">${score.joueur}</span>
					<span class="score-points">${score.score} points</span>
					<span class="score-difficulty">${difficulteTraduction[score.difficulte] || score.difficulte}</span>
					<span class="score-date">${score.date}</span>
					${pauseTexte}
				</li>
			`;
		})
		.join('');
}

// Initialisation au chargement de la page
function initialiserJeu() {
	// Désactiver les boutons au démarrage
	champSaisie.disabled = true;
	boutonDemarrer.disabled = true;
	boutonPause.disabled = true;
	boutonStop.disabled = true;
	
	// Afficher les scores existants
	afficherMeilleursScores();
}

// Gestionnaires d'événements
boutonDemarrer.addEventListener('click', demarrerJeu);

boutonPause.addEventListener('click', basculerPause);

boutonStop.addEventListener('click', arreterJeu);

champSaisie.addEventListener('input', verifierMot);

selecteurDifficulte.addEventListener('change', changerDifficultes);

function changerDifficultes(e) {
    etatJeu.difficulte = e.target.value;
	// effet feu
    e.target.setAttribute('data-value', e.target.value);
}

boutonPseudo.addEventListener('click', soumettreNomUtilisateur);



function initDifficultyAttributes() {
    const selectDifficulty = document.getElementById('difficulty');
    selectDifficulty.setAttribute('data-value', selectDifficulty.value);
}

document.addEventListener('DOMContentLoaded', initDifficultyAttributes);





// Lancer l'initialisation
initialiserJeu();