console.log("OK")

// colecciones o conjuntos de datos

// Arrays - Arreglos - vectores o matrices

let frutas = ["pera", "naranja", "banana", "frutilla", "uva"] // 0, 1, 2

// let varios = ["cadena", 45, true, null, undefined] // no se usa

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//cantidad de elementos de un arreglo
console.log(frutas.length)

//con for
for(let indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice]);
}

//cambiar un elemento del array
frutas[2] = "pomelo";
console.log(frutas)

//buscar un elemento
const elementoBuscado = "pomelo";
for(let indice = 0; indice < frutas.length; indice++){
    if(frutas[indice] === elementoBuscado){
        console.log("Elemento encontrado en la posicion " + indice);
        break;
    } else {
        console.log("No esta en la posicion" + indice)
    }
}

