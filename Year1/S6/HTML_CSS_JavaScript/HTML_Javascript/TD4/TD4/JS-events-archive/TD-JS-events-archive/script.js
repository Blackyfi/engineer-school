function changePano() {
    document.getElementById('panoramique').src = './images/panoramique2.jpg';
}

function changePano2() {
    document.getElementById('panoramique').src = './images/panoramique.jpg';
}

const pano = document.getElementById("panoramique");
pano.addEventListener("mouseover",changePano);
pano.addEventListener("mouseout",changePano2);

// Exercice 3

var currentImage = 'images/soleil.jpg';

function increaseSize() {
    const img = document.getElementById('eclipse-image');
    let currentWidth = parseInt(img.style.width);
    if (currentWidth < 500) {
        img.style.width = (currentWidth + 20) + 'px';
    }
}

function decreaseSize() {
    const img = document.getElementById('eclipse-image');
    let currentWidth = parseInt(img.style.width);
    if (currentWidth > 250) {
        img.style.width = (currentWidth - 20) + 'px';
    }
}

function toggleImage() {
    const img = document.getElementById('eclipse-image');
    if (currentImage === 'images/soleil.jpg') {
        img.src = 'images/eclipse.jpg';
        currentImage = 'images/eclipse.jpg';
    } else {
        img.src = 'images/soleil.jpg';
        currentImage = 'images/soleil.jpg';
    }
}

document.getElementById('increase').addEventListener('click', increaseSize);
document.getElementById('decrease').addEventListener('click', decreaseSize);
document.getElementById('eclipse-image').addEventListener('click', toggleImage);







// Exercice 4

var clickCount = 0;

function increaseCounter() {
    clickCount += 1;
    document.getElementById('compteur').textContent = clickCount;
    if (clickCount >= 5) {
        document.getElementById('poke').removeEventListener('click', increaseCounter);
    }
}

document.getElementById('poke').addEventListener('click', increaseCounter);
