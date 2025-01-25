var indiceImage = 0;

function afficheImage() {
    
    const srcimage = document.getElementById('diapo');
    srcimage.src = tabImages[indiceImage];
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

const buttonsui = document.getElementById('button sui');
buttonsui.addEventListener('click',imageSuivante);

const buttonpre = document.getElementById('button pre');
buttonpre.addEventListener('click',imagePrecedente);