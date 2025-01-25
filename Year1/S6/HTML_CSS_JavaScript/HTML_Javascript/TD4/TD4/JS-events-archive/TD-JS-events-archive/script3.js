function countVowels() {
    const phrase = document.getElementById('phrase-vowels').value;
    const vowels = phrase.match(/[aeiouyAEIOUY]/g);
    document.getElementById('result-vowels').textContent = `Nombre de voyelles : ${vowels ? vowels.length : 0}`;
}

function countWords() {
    const phrase = document.getElementById('phrase-words').value;
    const words = phrase.trim().split(/\s+|'/);
    document.getElementById('result-words').textContent = `Nombre de mots : ${words.filter(word => word !== '').length}`;
}

function createAcronym() {
    const phrase = document.getElementById('phrase-acronym').value;
    const words = phrase.trim().split(/\s+/);
    const acronym = words.map(word => word.charAt(0).toUpperCase()).join('');
    document.getElementById('result-acronym').textContent = `Acronyme : ${acronym}`;
}

function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    var result;

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            default:
                result = 'Opération invalide';
        }
    } else {
        result = 'Entrée invalide';
    }

    document.getElementById('result-calc').textContent = `Résultat : ${result}`;
}

document.getElementById('btn-vowels').addEventListener('click', countVowels);
document.getElementById('btn-words').addEventListener('click', countWords);
document.getElementById('btn-acronym').addEventListener('click', createAcronym);
document.getElementById('btn-calc').addEventListener('click', calculate);

