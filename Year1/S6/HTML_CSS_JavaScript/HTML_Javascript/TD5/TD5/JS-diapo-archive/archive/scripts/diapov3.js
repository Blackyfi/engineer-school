var indiceImage = 0;
var intervalID = 0;
var diapoEnCours = false;

const tabImages = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

function afficheImage() {
    const img = document.getElementById('diapo');
    img.src = tabImages[indiceImage];
}

function attenue() {
    const img = document.getElementById('diapo');
    img.style.opacity = 0;
}

function devoile() {
    const img = document.getElementById('diapo');
    img.style.opacity = 1;
}





function imageSuivante() {
    attenue();
    setTimeout(() => {
        indiceImage = (indiceImage + 1) % tabImages.length;
        afficheImage();
        devoile();
    }, 1000); // Temps pour que l'atténuation soit complète
}


function toggleDiapo() {
    const buttonToggle = document.getElementById('toggle');

    if (!diapoEnCours) {
        intervalID = setInterval(imageSuivante, 3000); // Change toutes les 3 secondes
        buttonToggle.textContent = "Stop";
        diapoEnCours = true;
    } else {
        clearInterval(intervalID);
        buttonToggle.textContent = "Lecture";
        diapoEnCours = false;
    }
}



document.getElementById('toggle').addEventListener('click', toggleDiapo);
