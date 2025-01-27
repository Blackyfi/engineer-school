// Récupération des éléments du DOM
const img = document.getElementById('diapo');
const toggleButton = document.getElementById('toggle');

// Création des nouveaux éléments
const infoDiv = document.createElement('div');
const delayInput = document.createElement('input');
const imageInfoSpan = document.createElement('span');
const fileNameSpan = document.createElement('span');

// Configuration des nouveaux éléments
delayInput.type = 'number';
delayInput.min = '1';
delayInput.value = '2';
delayInput.style.width = '60px';
infoDiv.appendChild(document.createTextNode('Délai (secondes): '));
infoDiv.appendChild(delayInput);
infoDiv.appendChild(document.createElement('br'));
infoDiv.appendChild(imageInfoSpan);
infoDiv.appendChild(document.createElement('br'));
infoDiv.appendChild(fileNameSpan);

// Insertion des éléments dans le DOM
img.parentNode.insertBefore(infoDiv, img.nextSibling);

// Variables de contrôle
let currentIndex = 0;
let intervalId = null;
let isPlaying = false;

// Fonction pour extraire le nom du fichier
function extractFileName(path) {
    return path.split('/').pop();
}

function updateInfo() {
    
    imageInfoSpan.textContent = `Image ${currentIndex + 1}/${tabImages.length}`;
    fileNameSpan.textContent = `Fichier: ${extractFileName(tabImages[currentIndex])}`;
}

function changeImage() {
    currentIndex = (currentIndex + 1) % tabImages.length;
    img.src = tabImages[currentIndex];
    attenue();

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % tabImages.length;
        img.src = tabImages[currentIndex];
        updateInfo();
        devoile();
    }, 500);
}

function startSlideshow() {
    if (!isPlaying) {
        const delay = parseInt(delayInput.value) * 1000;
        intervalId = setInterval(changeImage, delay);
        toggleButton.textContent = '⏸️';
        isPlaying = true;
    }
}

function stopSlideshow() {
    if (isPlaying) {
        clearInterval(intervalId);
        toggleButton.textContent = '▶️';
        isPlaying = false;
    }
}

function toggleSlideshow() {
    if (isPlaying) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}


toggleButton.addEventListener('click', toggleSlideshow);

delayInput.addEventListener('change', function() {
    if (isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
});



function attenue() {
    img.style.opacity = 0;
}
  
function devoile() {
    img.style.opacity = 1;
}
