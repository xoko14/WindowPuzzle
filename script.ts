abstract class Behaviour {
    lit = "🟨"
    notLit = "⬛"
    abstract flipGroup(elementClass: string): void
    abstract reset(): void
}

class ToggleBehaviour extends Behaviour {
    flipGroup(elementClass: string): void {
        var elements = document.getElementsByClassName(elementClass)
        for (var i = 0; i < elements.length; i++) {
            this.flip(elements[i])
        }
    }
    private flip(element: Element): void {
        if (element.innerHTML == this.lit) {
            element.innerHTML = this.notLit
        }
        else {
            element.innerHTML = this.lit
        }
    }

    reset(): void {
        var elements = document.getElementsByClassName("window")
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.notLit
        }
    }
}

class OverwriteBehaviour extends Behaviour{
    private buttonStates: Map<string, boolean> = new Map([
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
    ])

    private localState: string

    flipGroup(elementClass: string): void {
        var elements = document.getElementsByClassName(elementClass)
        this.buttonStates.set(elementClass, !this.buttonStates.get(elementClass))
        if(this.buttonStates.get(elementClass)){
            document.getElementById(elementClass).style.color = "#FFFF00"
            this.localState = this.lit
        }
        else{
            document.getElementById(elementClass).style.color = "#000000"
            this.localState = this.notLit
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.localState
        }
    }

    reset(): void {
        var elements = document.getElementsByClassName("window")
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.notLit
        }
        this.buttonStates.forEach((value: boolean, key: string) => {
            value = false
            document.getElementById(key).style.color = "#000000"
        })
        
    }

}

var behaviour: Behaviour = new OverwriteBehaviour()

function changeBehaviour(): void{
	var check = <HTMLInputElement> document.getElementById("selector")
    behaviour.reset()
    if(check.checked) behaviour = new OverwriteBehaviour()
    else behaviour = new ToggleBehaviour()
}
