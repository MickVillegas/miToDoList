window.onload = () =>{

    if(localStorage.getItem("TareasGuardadas").length > 1){

        let divTareas = document.getElementById("tareas")
        let recogerTareas = localStorage.getItem("TareasGuardadas")
        let resultado = ""
        let tareasRecogidas = []

        for(let i = 0; i < recogerTareas.length; i++){
            if(recogerTareas[i] == ","){
                tareasRecogidas.push(resultado)
                resultado = ""
            }
            else if(i == (recogerTareas.length - 1)){
                resultado += recogerTareas[i]
                tareasRecogidas.push(resultado)
            }
            else{
                resultado += recogerTareas[i]
            }
        }

        for (let i = 0; i < tareasRecogidas.length; i++) {

            let div = document.createElement("div")
            div.setAttribute("class", "pepino")
            let parrafo = document.createElement("p")
            let texto = document.createTextNode(tareasRecogidas[i])
            parrafo.setAttribute("class", "none")
            parrafo.setAttribute("id", "tareaNueva")
            let boton = document.createElement("button")
            let textoboton = document.createTextNode("Borrar")
            let br = document.createElement("br")

            parrafo.appendChild(texto)
            boton.appendChild(textoboton)
            div.appendChild(parrafo)
            div.appendChild(boton)
            divTareas.appendChild(div)
            divTareas.appendChild(br)    
        }
    }
}

let numeroTarea = 0;
let boton = document.getElementById("subir");
let lugarTareas = document.getElementById("tareas")
let guardaar = document.getElementById("guardar")

boton.addEventListener("click", crearTarea)
lugarTareas.addEventListener("click", borrar)
guardaar.addEventListener("click", guardar)

function getNumero(){
    return numeroTarea;
}

function sumarNumero(){
    numeroTarea = numeroTarea + 1;
}

function crearTarea(){
    let campoTexto = document.getElementById("escribe");
    let divTareas = document.getElementById("tareas")

    let div = document.createElement("div")
    div.setAttribute("class", "pepino")
    let parrafo = document.createElement("p")
    let texto = document.createTextNode(campoTexto.value)
    parrafo.setAttribute("class", "none")
    parrafo.setAttribute("id", "tareaNueva")
    let boton = document.createElement("button")
    let textoboton = document.createTextNode("Borrar")
    let br = document.createElement("br")

    parrafo.appendChild(texto)
    boton.appendChild(textoboton)
    div.appendChild(parrafo)
    div.appendChild(boton)
    divTareas.appendChild(div)
    divTareas.appendChild(br)

    campoTexto.value = ""
}

function borrar(event){
    let nodoCLick;

    if(event){
        nodoCLick = event.target;

        if(nodoCLick.nodeName == "BUTTON"){
            let padre = nodoCLick.parentNode
            let padreDelPadre = nodoCLick.parentNode.parentNode
            let primerHijo = nodoCLick.parentNode.firstElementChild
            let ultimoHijo = nodoCLick.parentNode.lastElementChild

            padre.removeChild(primerHijo)
            padre.removeChild(ultimoHijo)
            padreDelPadre.removeChild(padre)
        }
        else if(nodoCLick.nodeName == "P"){
            if(nodoCLick.className != "hecho"){
                nodoCLick.className = "hecho"
            }
            else{
                nodoCLick.className = "none"
            }   
        } 
    }
}


function guardar(){
    let almacenar = []
    let misTareas = document.querySelectorAll("#tareaNueva")

    for(let i = 0; i < misTareas.length; i++){
        almacenar.push(misTareas[i].textContent)
    }

    localStorage.setItem("TareasGuardadas", almacenar)

    alert("¡Tareas guardadas!")
}