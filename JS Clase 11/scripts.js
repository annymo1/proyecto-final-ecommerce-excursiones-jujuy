console.log("OK")


const nombreUsuario = document.getElementById("nombre").value

console.log(nombreUsuario)

const edadUsuario = document.getElementById("edad").value

console.log(edadUsuario)

const parrafoSaludo = document.getElementById("saludo")

console.log(parrafoSaludo)

parrafoSaludo.innerText = "Hola " + nombreUsuario

const mayorDeEdad = document.getElementById("mayorDeEdad")
// console.log(mayorDeEdad)
mayorDeEdad.innerText = "Tenés " + edadUsuario + " años"

console.log(edadUsuario >= 18) // a + b

const esMayor = document.getElementById("esMayor")
// esMayor.innerText = "Sos mayor de edad?:" + (edadUsuario >= 18)

/* if (edadUsuario >= 18) {
    esMayor.innerText = "Podés comprar bebidas alcohólicas";
} else if (edadUsuario > 60) {
    esMayor.innerText = "Tenés un 20% de descuento en Vinos"; //esto no lo esta aplicando porque ya la primera instruccion se cumple, y esta la incluye
}
else {
    esMayor.innerText = "Solo podes comprar agua y gaseosas";
} */
/*
if(isNaN(edadUsuario)){  //true
validadEdad.innerText = "Ingrese un valor númerico"
}else
*/


    if (edadUsuario > 18 && edadUsuario < 60) {
        esMayor.innerText = "Podés comprar bebidas alcohólicas";
    } else if (edadUsuario > 60 && edadUsuario < 100) {
        esMayor.innerText = "Tenés un 20% de descuento en Vinos"; 
    }
    else {
        esMayor.innerText = "Solo podes comprar agua y gaseosas";
    }

    // Operador logico || para OR y && es para AND




