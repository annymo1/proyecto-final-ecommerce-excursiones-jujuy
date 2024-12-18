console.log("OK")

const tours = [
{
    nombre: "Hornocal",
    imagen: "Imagenes/cerro.jpg",
    descripcion: "Humahuaca con Serranías del Hornocal, Cerro de 14 colores",
    precio: 70000,
    
},
{
    nombre: "Salinas Grandes",
    imagen: "Imagenes/salinas.jpg",
    descripcion: "Purmamarca, Cerro de 7 Colores, Cuesta de Lipan, Ojo del Salar",
    precio: 50000,
},
{
    nombre: "Quebrada de las Señoritas",
    imagen: "Imagenes/quebrada.jpg",
    descripcion: "Uquia, Quebrada de las Señoritas",
    precio: 30000,
},
{
    nombre: "Castillos de huichaira",
    imagen: "Imagenes/castillos.jpg",
    descripcion: "Caminata guiada a los Castillos de Huichaira",
    precio: 10000,
},
{
    nombre: "Pucara de Tilcara",
    imagen: "Imagenes/pucara.webp",
    descripcion: "Pucara de Tilcara, Jardin Botánico",
    precio: 20000,
},
{
    nombre: "Camino de los colorados",
    imagen: "Imagenes/camino.jpg",
    descripcion: "Purmamarca, Camino de los colorados",
    precio: 30000,
},
]

let toursHTML = "";
for(let i = 0; i < tours.length; i++){
    toursHTML += `
                <div class="tours">
                    <img src= ${tours[i].imagen} alt="cerro de los catorce colores" class="imagen_tour">
                        <div class="tour_texto">
                            <h2>${tours[i].nombre}</h2>
                            <p>${tours[i].descripcion}</p>
                            <h3>Precio: $${tours[i].precio}</h3>
                            <a href="tours.html"></a>
                            <input class="boton-agregar" type="button" value="Reserva aquí"> 
                            
                        </div>
                
                </div>
`
};

console.log(toursHTML);

const contenedorTours = document.getElementById("contenedorTours");
contenedorTours.innerHTML = toursHTML;

const botonesAgregar = document.querySelectorAll(".boton-agregar");
console.log(botonesAgregar);

const listaCarrito = document.querySelector("carrito ul");
console.log(listaCarrito);

const totalCarrito = document.querySelector("carrito p");
console.log(totalCarrito);

let totalAPagar = 0;

//agregamos el listener a cada boton

for(let i= 0; i < botonesAgregar.length; i++){
    
} 

