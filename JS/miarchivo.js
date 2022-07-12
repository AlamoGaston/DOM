let user = prompt("Por favor ingrese su nombre de usuario: ");
alert(
  `Hola ${user.toUpperCase()}, usted ingreso al cotizador vehicular, por favor elija su tipo de vehiculo`
);

const listaDeSeguros = [
  {
    id: 1,
    nombre: "MotoRes",
    tipo: "Responsavilidad civil",
    precio: "500",
    opcion: "Opcion 1",
  },
  {
    id: 2,
    nombre: "MotoCon",
    tipo: "Contra todo Riesgo",
    precio: "1000",
    opcion: "Opcion 2",
  },
  {
    id: 3,
    nombre: "AutoRes",
    tipo: "Responsavilidad civil",
    precio: "750",
    opcion: "Opcion 3",
  },
  {
    id: 4,
    nombre: "AutoCon",
    tipo: "Contra todo Riesgo",
    precio: "2000",
    opcion: "Opcion 4",
  },
  {
    id: 5,
    nombre: "CamionRes",
    tipo: "Responsavilidad civil",
    precio: "1000",
    opcion: "Opcion 5",
  },
  {
    id: 6,
    nombre: "CamionCon",
    tipo: "Contra todo Riesgo",
    precio: "5000",
    opcion: "Opcion 6",
  },
  {
    id: 7,
    nombre: "AcopladoCon",
    tipo: "Responsavilidad civil",
    precio: "700",
    opcion: "Opcion 7",
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
              <button id="btn">Elegir: <b>${seguro.opcion}<b/></button>  
          </div>
      `;

  seguros.append(columna);
}

let columnaBorrar = document.getElementById("columna-7");
columnaBorrar.click();

let header1 = document.getElementById("titulo");
header1.innerHTML = "<h1>SEGUROS AUTOMOTOR</h1> <p>Elija su seguro</p>";

let body1 = document.getElementById("tipo");
body1.innerHTML = "<h2>Tipos de Seguro</h2>";
