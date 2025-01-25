const farenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");



function convertTempFromCelToFar() {
    if (celsius.value != "") {
        let result = (parseInt(celsius.value) * (9/5)) + 32;
        farenheit.value = result;
    }

};

const butCelToFar = document.getElementById("cToF");
butCelToFar.addEventListener("click",convertTempFromCelToFar);


function convertTempFromFarToCel() {
    if (farenheit.value != "") {
        let result = (parseInt(farenheit.value) - 32)/ (9/5) ;
        celsius.value = result;
    }

};

const butFarToCel = document.getElementById("fToC");
butFarToCel.addEventListener("click",convertTempFromFarToCel);



celsius.addEventListener("change",convertTempFromCelToFar);
farenheit.addEventListener("change",convertTempFromFarToCel);

