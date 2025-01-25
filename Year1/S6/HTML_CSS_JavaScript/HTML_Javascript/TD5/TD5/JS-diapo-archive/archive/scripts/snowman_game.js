// Exercice 4 : Bonhomme de neige

var snowmanTop = 100;
var snowmanLeft = 100;
var score = 0;
var maxHazelnuts = 20;
var hazelnutInterval;

function moveSnowman(event) {
    const snowman = document.getElementById('snowman');
    const gameArea = document.getElementById('game-area');

    if (event.key === 'ArrowUp' && snowmanTop > 0) {
        snowmanTop -= 50;
    } else if (event.key === 'ArrowDown' && snowmanTop < gameArea.clientHeight - snowman.clientHeight) {
        snowmanTop += 50;
    } else if (event.key === 'ArrowLeft' && snowmanLeft > 0) {
        snowmanLeft -= 50;
    } else if (event.key === 'ArrowRight' && snowmanLeft < gameArea.clientWidth - snowman.clientWidth) {
        snowmanLeft += 50;
    }

    snowman.style.top = snowmanTop + 'px';
    snowman.style.left = snowmanLeft + 'px';

    checkCollision();
}

function spawnHazelnut() {
    const hazelnut = document.createElement('div');
    hazelnut.classList.add('hazelnut');

    const gameArea = document.getElementById('game-area');
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    hazelnut.style.top = Math.random() * maxY + 'px';
    hazelnut.style.left = Math.random() * maxX + 'px';

    gameArea.appendChild(hazelnut);

    if (document.querySelectorAll('.hazelnut').length > maxHazelnuts) {
        alert('Perdu ! Trop de noisettes sur l\'écran.');
        clearInterval(hazelnutInterval);
    }
}

function checkCollision() {
    const snowman = document.getElementById('snowman');
    const hazelnuts = document.querySelectorAll('.hazelnut');

    hazelnuts.forEach(hazelnut => {
        const hazelnutRect = hazelnut.getBoundingClientRect();
        const snowmanRect = snowman.getBoundingClientRect();

        if (
            snowmanRect.left < hazelnutRect.right &&
            snowmanRect.right > hazelnutRect.left &&
            snowmanRect.top < hazelnutRect.bottom &&
            snowmanRect.bottom > hazelnutRect.top
        ) {
            hazelnut.remove();
            score += 1;
            document.getElementById('score').textContent = `Score : ${score}`;
        }
    });
}

document.addEventListener('keydown', moveSnowman);
hazelnutInterval = setInterval(spawnHazelnut, 2000);
