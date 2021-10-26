class Behaviour {
    constructor() {
        this.lit = "🟨";
        this.notLit = "⬛";
    }
}
class ToggleBehaviour extends Behaviour {
    flipGroup(elementClass) {
        var elements = document.getElementsByClassName(elementClass);
        for (var i = 0; i < elements.length; i++) {
            this.flip(elements[i]);
        }
    }
    flip(element) {
        if (element.innerHTML == this.lit) {
            element.innerHTML = this.notLit;
        }
        else {
            element.innerHTML = this.lit;
        }
    }
    reset() {
        var elements = document.getElementsByClassName("window");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.notLit;
        }
    }
}
class OverwriteBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.buttonStates = new Map([
            ["a", false],
            ["b", false],
            ["c", false],
            ["d", false],
            ["zero", false],
            ["one", false],
            ["two", false],
            ["three", false],
            ["four", false],
            ["five", false],
            ["six", false]
        ]);
    }
    flipGroup(elementClass) {
        var elements = document.getElementsByClassName(elementClass);
        this.buttonStates.set(elementClass, !this.buttonStates.get(elementClass));
        if (this.buttonStates.get(elementClass)) {
            document.getElementById(elementClass).style.color = "#FFFF00";
            this.localState = this.lit;
        }
        else {
            document.getElementById(elementClass).style.color = "#000000";
            this.localState = this.notLit;
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.localState;
        }
    }
    reset() {
        var elements = document.getElementsByClassName("window");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.notLit;
        }
        this.buttonStates.forEach((value, key) => {
            value = false;
            document.getElementById(key).style.color = "#000000";
        });
    }
}
var behaviour = new OverwriteBehaviour();
function changeBehaviour() {
    var check = document.getElementById("selector");
    behaviour.reset();
    if (check.checked) {
        document.getElementById("txtHint").innerHTML = "Behaviour type: Overwrite";
        behaviour = new OverwriteBehaviour();
    }
    else {
        document.getElementById("txtHint").innerHTML = "Behaviour type: Toggle";
        behaviour = new ToggleBehaviour();
    }
}
//# sourceMappingURL=script.js.map