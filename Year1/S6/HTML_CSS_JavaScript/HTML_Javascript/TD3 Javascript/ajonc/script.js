function changeWidth(imageElement, width) {
    if (imageElement instanceof HTMLImageElement) {
        imageElement.style.width = `${width}px`;
    }
}


function loupe(element) {
    const computedStyle = window.getComputedStyle(element);
    const currentFontSize = parseFloat(computedStyle.fontSize);
    element.style.fontSize = `${currentFontSize * 2}px`;
}





function tousVerts(tagName, root = document) {
    const elements = root.getElementsByTagName(tagName);
    for (let element of elements) {
        element.style.color = "green";
    }
}



const droiteElements = document.getElementsByClassName('droite');
for (let element of droiteElements) {
    element.style.padding = "20px";
}

const ajoncs = document.getElementById('ajoncs');
const parElements = ajoncs.getElementsByClassName('par');
for (let element of parElements) {
    element.style.border = "1px solid blue";
}

function cache(className) {
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.style.display = "none";
    }
}