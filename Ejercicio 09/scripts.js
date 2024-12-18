
/* const nota_uno = document.getElementById("nota_uno").value
const nota_dos = document.getElementById("nota_dos").value
const nota_tres = document.getElementById("nota_tres").value */

nota_uno = parseInt(prompt("Ingrese su primera nota"))
nota_dos = parseInt(prompt("Ingrese su segunda nota"))
nota_tres = parseInt(prompt("Ingrese su tercera nota"))

parseInt(nota_uno)
parseInt(nota_dos)
parseInt(nota_tres)

let Promedio = (nota_uno + nota_dos + nota_tres) / 3

const notaFinal = document.getElementById("notaFinal")

notaFinal.innerText = "Tu promedio final de esta materia es " + Promedio

// document.getElementById("notaFinal").innerText = "Tu promedio final de esta materia es " + Promedio

//Esta seria otra manera de rellenar un InnerText

const promedioFinal = document.getElementById("promedioFinal")  

if (Promedio > 5) {
    promedioFinal.innerText = "Aprobaste";
} else {
    promedioFinal.innerText = "Reprobaste";
}