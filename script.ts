const lit = "🟨"
const notLit = "⬛"

function flip(element: Element): void{
    if(element.innerHTML == lit){
        element.innerHTML = notLit
    }
    else{
        element.innerHTML = lit
    }
}

function flipGroup(elementClass: string): void{
    var elements = document.getElementsByClassName(elementClass)
    for(var i = 0; i<elements.length;i++){
        flip(elements[i])
    }
}

function reset():void{
    var elements = document.getElementsByClassName("window")
    for(var i = 0; i<elements.length;i++){
        elements[i].innerHTML = notLit
    }
}