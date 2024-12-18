/*const edad = parseInt("22")

if(edad < 0 || edad < 120 || isNaN(edad)) {
    console.log("Ingrese un valor correcto para su edad")
}
else {
    console.log("La edad es correcta")
} */
/*
let edad;

while(edad < 0 || edad < 120 || isNaN(edad)){
    edad = parseInt(prompt("Edad"));
    console.log(edad);
    if (edad < 0 || edad > 120 || isNaN(edad)){
        console.log("Ingrese un valor correcto para su edad"); 
    }
    console.log("Ingrese un valor correcto para su edad");
} 


console.log("La edad es correcta")
*/
/*+
do {
    edad = parseInt(prompt("Edad"));
    console.log(edad);
    console.log("Ingrese un valor correcto para su edad");
} while(edad < 0 || edad > 120 || isNaN(edad)) 

console.log("La edad es correcta")
*/

// repetir 3 veces
//contador++ aumenta de 1 y contador += 3 aumenta de a 3

for(let contador = 1; contador < 4; contador++){
    edad = parseInt(prompt("Edad"));
    console.log(edad);
    if (edad < 0 || edad > 120 || isNaN(edad)){
        console.log("Ingrese un valor correcto para su edad"); 
    } else {
        console.log("La edad es correcta");
        break;
              
    }
}
console.log("Se acabaron los 3 intentos")
