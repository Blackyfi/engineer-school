var indiceImage = 0;
var cheminFIchierMIeux;
var intervalID = 0;
var diapoEnCours = false;

function afficheImage() {
    const srcimage = document.getElementById('diapo');
    srcimage.src = tabImages[indiceImage];
    ip.textContent = indiceImage + 1;
    Np.textContent = tabImages.length;
    cheminFIchierMIeux = tabImages[indiceImage].split('/');
    cheminFichier.textContent = cheminFIchierMIeux[1];
};

function imageSuivante() {
    if (indiceImage != tabImages.length - 1) {
        indiceImage++;
    } else {
        indiceImage = 0;
    }
    afficheImage();
};

function imagePrecedente() {
    if (indiceImage != 0) {
        indiceImage = indiceImage - 1;
    } else {
        indiceImage = tabImages.length - 1;
    }
    afficheImage();
};

function toggleDiapo() {
    const buttonToggle = document.getElementById('toggle');

    if (!diapoEnCours) {
        const delay = parseInt(document.getElementById('niceInput').value) * 1000 || 2000;
        intervalID = setInterval(imageSuivante, delay);
        buttonToggle.textContent = "Stop";
        buttonToggle.classList.add('pause');
        buttonToggle.classList.remove('play');
        diapoEnCours = true;
    } else {
        clearInterval(intervalID);
        buttonToggle.textContent = "Lecture";
        buttonToggle.classList.add('play');
        buttonToggle.classList.remove('pause');
        diapoEnCours = false;
    }
};

document.getElementById('toggle').addEventListener('click', toggleDiapo);
document.getElementById('button sui').addEventListener('click', imageSuivante);
document.getElementById('button pre').addEventListener('click', imagePrecedente);

ip.textContent = indiceImage + 1;
Np.textContent = tabImages.length;
cheminFIchierMIeux = tabImages[indiceImage].split('/');
cheminFichier.textContent = cheminFIchierMIeux[1];
