// function changePano() {
//     document.getElementById('panoramique').src = './images/panoramique2.jpg';
// }

// function changePano2() {
//     document.getElementById('panoramique').src = './images/panoramique.jpg';
// }

// var pano = document.getElementById("panoramique");
// pano.addEventListener("mouseover",changePano);
// pano.addEventListener("mouseout",changePano2);

// Exercice 3

const image = document.getElementById('eclipse-image');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

const MIN_WIDTH = 250;
const MAX_WIDTH = 500;
const STEP = 20;
const INITIAL_IMAGE = './images/soleil.jpg';
const ECLIPSE_IMAGE = './images/eclipse.jpg';

image.style.width = '400px';

let isEclipseShowing = false;

function increaseSize() {
    const currentWidth = parseInt(image.style.width);
    if (currentWidth < MAX_WIDTH) {
        image.style.width = `${currentWidth + STEP}px`;
    }
}

function decreaseSize() {
    const currentWidth = parseInt(image.style.width);
    if (currentWidth > MIN_WIDTH) {
        image.style.width = `${currentWidth - STEP}px`;
    }
}

function toggleImage() {
    if (!isEclipseShowing) {
        image.src = ECLIPSE_IMAGE;
        isEclipseShowing = true;
    } else {
        image.src = INITIAL_IMAGE;
        isEclipseShowing = false;
    }
}

increaseBtn.addEventListener('click', increaseSize);
decreaseBtn.addEventListener('click', decreaseSize);
image.addEventListener('click', toggleImage);





// Exercice 4

// var clickCount = 0;

// function increaseCounter() {
//     clickCount += 1;
//     document.getElementById('compteur').textContent = clickCount;
//     if (clickCount >= 5) {
//         document.getElementById('poke').removeEventListener('click', increaseCounter);
//     }
// }

// document.getElementById('poke').addEventListener('click', increaseCounter);
