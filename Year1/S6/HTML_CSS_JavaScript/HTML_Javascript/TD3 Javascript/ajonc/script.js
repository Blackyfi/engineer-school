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


function cache(className) {
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.style.display = "none";
    }
}