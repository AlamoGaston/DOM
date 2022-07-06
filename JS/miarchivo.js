/*
console.dir(document);
console.dir(document.head);
console.dir(document.body);
*/

/*--*/

/*
let contenedor = document.getElementById("contenedor-ejemplo-dos");
let parrafoUno = document.getElementById("parrafo1");

console.dir(contenedor);
console.log(contenedor.innerHTML);
console.log(parrafoUno.innerHTML);
*/

/*--*/

/*
let listaContenedores = document.getElementsByClassName(
  "contenedor-ejemplo-tres"
);

console.log(listaContenedores);

for (const elemento of listaContenedores) {
  console.log(elemento.innerHTML);
}
*/

/*--*/

/*
let listaItems = document.getElementsByTagName("li");
console.log(listaItems);

for (const elemento of listaItems) {
  console.log(elemento.innerHTML);
}
*/

/*--*/

/*
let parrafo = document.getElementById("parrafo-cinco");

console.log(parrafo.innerText);
parrafo.innerText = "Hola!!, este es un parrafo modificado";
console.log(parrafo.innerText);
*/

/*--*/

/*
let contenedor = document.getElementById("contenedor-seis");
contenedor.innerHTML =
  "<h2>Hola!!</h2><p>Este es un texto agregado desde Javascript</p>";
console.log(contenedor.innerHTML);

contenedor.className = "bg-blue ";
*/

/*--*/

/*
let inputCorreo = document.getElementById("inputCorreo");
let inputContraseña = document.getElementById("inputContraseña");

console.log(inputCorreo.value);
inputCorreo.value = "gaston@prueba.com";
console.log(inputCorreo.value);
console.log(inputContraseña.value);
*/

/*--*/

const listaDeSeguros = [
  {
    id: 1,
    nombre: "MotoRes",
    tipo: "Responsavilidad civil",
    precio: "500",
  },
  {
    id: 2,
    nombre: "MotoCon",
    tipo: "Contra todo Riesgo",
    precio: "1000",
  },
  {
    id: 3,
    nombre: "AutoRes",
    tipo: "Responsavilidad civil",
    precio: "750",
  },
  {
    id: 4,
    nombre: "AutoCon",
    tipo: "Contra todo Riesgo",
    precio: "2000",
  },
  {
    id: 5,
    nombre: "CamionRes",
    tipo: "Responsavilidad civil",
    precio: "1000",
  },
  {
    id: 6,
    nombre: "CamionCon",
    tipo: "Contra todo Riesgo",
    precio: "5000",
  },
  {
    id: 7,
    nombre: "AcopladoCon",
    tipo: "Responsavilidad civil",
    precio: "700",
  },
];

let seguros = document.getElementById("seguros-vehiculos");

for (const seguro of listaDeSeguros) {
  let columna = document.createElement("div");
  columna.className = "col-md-3 mt-5";
  columna.id = `columna-${seguro.id}`;
  columna.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nombre: <b>${seguro.nombre}</b></p>
                <p class="card-text">Tipo: <b>${seguro.tipo}</b></p>
                <p class="card-text">Precio venta: <b>${seguro.precio}</b></p>
            </div>    
        </div>
    `;

  seguros.append(columna);
}

let columnaBorrar = document.getElementById("columna-7");
columnaBorrar.remove();

let header1 = document.getElementById("titulo");
header1.innerHTML = "<h1>SEGUROS AUTOMOTOR</h1> <p>Elija su seguro</p>";

let body1 = document.getElementById("tipo");
body1.innerHTML = "<h2>Tipos de Seguro</h2>";
