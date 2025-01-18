function changeWidth(x,y) {
    if (typeof x == 'img' && typeof y == 'int') {
        x.style.width = y+"px";
    } else {
        alert("nope sike");
    }

    return;
};