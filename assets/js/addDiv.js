

const newColor = document.addEventListener ("keydown", function(event) {
    if(event.key === "a") {
        document.getElementById("newElement").style.backgroundColor = "pink"
    } else if (event.key === "s") {
        document.getElementById("newElement").style.backgroundColor = "orange"
    } else if (event.key === "d") {
        document.getElementById("newElement").style.backgroundColor = "cyan"
    }
})


document.addEventListener("keydown", function(event){
    if (event.key === "q") {
        addElemento('purple');
    }else if (event.key === "w") {
        addElemento('grey');
    }else if (event.key === "e") {
        addElemento('brown')
    }
})

function addElemento (backgroundColor) {
    const contenedor = document.getElementById("contenedor");
    const nuevoElemento = document.createElement("div");
    nuevoElemento.className = "box"
    nuevoElemento.id = "newElement"
    nuevoElemento.style.backgroundColor = backgroundColor;
    contenedor.appendChild(nuevoElemento);
}

