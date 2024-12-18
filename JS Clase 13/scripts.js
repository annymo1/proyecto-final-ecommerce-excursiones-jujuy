console.log("OK")

let nombre = "Juan" ;

let alumnos = ["Maria" , "Laura", "Pedro"];

let Maria = {
    nombre: "Maria",
    apellido: "Lopez",
    dni: 2586456,
    tieneLicencia: true
};

const producto1 = {
    nombre: "Curso PH" , // par clave-valor key-value llave-value
    precio: 15000
};

const producto2 = {
    nombre: "Curso PS" , // par clave-valor key-value llave-value
    precio: 15000
};

const productos = [
    {
        nombre: "Curso PH" , // par clave-valor key-value llave-value
        precio: 15000
    },
    {
        nombre: "Curso PS" , // par clave-valor key-value llave-value
        precio: 15000
    }
]

console.log(productos)

function suma(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
};

console.log(suma(10, 20))

//event listener

const btnHacerClicks = document.getElementById("btnHacerClicks");

const lblClick = document.getElementById("lblClick")

let contador = 0;
function contarClicks() {
    contador++;
    console.log(contador + "clicks")
    lblClick.innerText = contador;
}



btnHacerClicks.addEventListener("click", contarClicks)

