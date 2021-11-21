const ingresos = [
  new Ingreso("Salario", 2000),
  new Ingreso("Venta de Auto", 1500),
];

const egresos = [new Egreso("Alquiler dpto", 900), new Egreso("Ropa", 400)];

let cargarApp = () => {
  cargarCabecero();
};

function totalIngresos() {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
}

let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

// Método que interactua con html
let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();

  document.getElementById("presupuesto").innerHTML = presupuesto;
  document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
  document.getElementById("ingresos").innerHTML = totalIngresos();
  document.getElementById("egresos").innerHTML = totalEgresos();
};
