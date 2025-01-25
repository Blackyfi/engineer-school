function changePano() {
    document.getElementById('panoramique').src = './images/panoramique2.jpg';
}

function changePano2() {
    document.getElementById('panoramique').src = './images/panoramique.jpg';
}

const pano = document.getElementById("panoramique");
pano.addEventListener("mouseover",changePano);
pano.addEventListener("mouseout",changePano2);