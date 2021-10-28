var impuestos = parseInt(prompt("Ingrese el gasto de impuestos"));

var gastoEmpleados = parseInt(prompt("Ingrese el gasto de los empleados "));

var gastoTotal = impuestos + gastoEmpleados;
console.log(gastoTotal);

var cant = parseInt(prompt("Ingrese la cantidad de días"));

function gananciaTotal(cant, gasto3) {
  var sumador = 0;
  var gasto3 = gastoTotal;

  for (cant; cant > 0; cant--) {
    var ganancias = parseInt(prompt("Ingrese las ganancias del dia " + cant));
    console.log(ganancias);
    if (ganancias > gasto3) {
      let total = ganancia(ganancias, gasto3);
      sumador = sumador + total;
    } else {
      let perdida = perdidas(ganancias, gasto3);
      sumador = sumador + perdida;
    }
  }

  return sumador;
}

function ganancia(ganancias, gasto3) {
  console.log("Este día fue positivo");

  let total = ganancias - gasto3;
  console.log("Las ganancias del día" + " " + cant + " " + "fue" + " " + total);

  return total;
}

function perdidas(ganancias, gasto3) {
  console.log("El día fue negativo ");

  let perdida = ganancias - gasto3;
  console.log(
    "La perdida total del dia" + " " + cant + " " + "fue" + " " + perdida
  );
  return perdida;
}

let mostrar = gananciaTotal(cant);
alert("Las ganacias totales de los días ingresados es " + mostrar);
