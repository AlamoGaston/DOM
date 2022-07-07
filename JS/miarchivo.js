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
