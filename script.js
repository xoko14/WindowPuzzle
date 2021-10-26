var lit = "🟨";
var notLit = "⬛";
function flip(element) {
    if (element.innerHTML == lit) {
        element.innerHTML = notLit;
    }
    else {
        element.innerHTML = lit;
    }
}
function flipGroup(elementClass) {
    var elements = document.getElementsByClassName(elementClass);
    for (var i = 0; i < elements.length; i++) {
        flip(elements[i]);
    }
}
function reset() {
    var elements = document.getElementsByClassName("window");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = notLit;
    }
}
