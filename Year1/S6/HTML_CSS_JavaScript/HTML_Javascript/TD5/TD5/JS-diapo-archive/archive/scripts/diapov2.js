var indiceImage = 0;
var cheminFIchierMIeux;

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

const niceInput = document.getElementById('niceInput');

var intervalID = 0;
var delay = 0;
var zz = 0;

function suiTimeOut() {
    delay = parseInt(niceInput.value) * 1000;
    intervalID = setInterval(imageSuivante,delay);
};

function stopping(){
    clearInterval(intervalID);
};

function changing() {
    if(zz == 1) {
        buttonLecture.removeEventListener('click');
        buttonLecture.addEventListener('click',zz = 0);
        suiTimeOut()
    } else {
        buttonLecture.removeEventListener('click');
        buttonLecture.addEventListener('click',zz = 1);
        stopping()
    }
};

const buttonsui = document.getElementById('button sui');
buttonsui.addEventListener('click',imageSuivante);

const buttonpre = document.getElementById('button pre');
buttonpre.addEventListener('click',imagePrecedente);

const buttonLecture = document.getElementById('Lecture');
buttonLecture.addEventListener('click',suiTimeOut);


const buttonStop = document.getElementById('Stop');
buttonStop.addEventListener('click',stopping);

const ip = document.getElementById('iID');

const Np = document.getElementById('NID');

const cheminFichier = document.getElementById('nomDuFichier');


ip.textContent = indiceImage + 1;
Np.textContent = tabImages.length;
cheminFIchierMIeux = tabImages[indiceImage].split('/');
cheminFichier.textContent = cheminFIchierMIeux[1];


