const impuestos = parseInt(prompt("Ingrese el gasto de impuestos"));

const gastoEmpleados = parseInt(prompt("Ingrese el gasto de los empleados "));

let gastoTotal = impuestos + gastoEmpleados;

document.getElementById("gastos").innerHTML = gastoTotal;

var cant = parseInt(prompt("Ingrese la cantidad de días"));

function gananciaTotal(cant, gasto3) {
  var sumador = 0;
  var gasto3 = gastoTotal;
  let dias = cant;

  for (dias; dias > 0; dias--) {
    var ganancias = parseInt(prompt("Ingrese las ganancias del dia " + cant));
    console.log(ganancias);
    if (ganancias > gasto3) {
      let total = ganancia(ganancias, gasto3, dias);
      sumador = sumador + total;
    } else {
      let perdida = perdidas(ganancias, gasto3, dias);
      sumador = sumador + perdida;
    }
  }

  return sumador;
}

function ganancia(ganancias, gasto3, dias) {
  const div = document.createElement("div");
  div.className = "elemento";
  console.log("Este día fue positivo");

  let total = ganancias - gasto3;
  console.log("Las ganancias del día" + " " + cant + " " + "fue" + " " + total);

  div.innerHTML = `Las ganancias del dia ${dias} fue de ${total} `;
  document.body.appendChild(div);
  return total;
}

function perdidas(ganancias, gasto3, dias) {
  const div = document.createElement("div");
  div.className = "elemento";
  console.log("El día fue negativo ");

  let perdida = ganancias - gasto3;
  console.log(
    "La perdida total del dia" + " " + cant + " " + "fue" + " " + perdida
  );
  div.innerHTML = `La perdida del día ${dias} fue de ${perdida} `;
  document.body.appendChild(div);
  return perdida;
}

let mostrar = gananciaTotal(cant);
alert("Las ganacias totales de los días ingresados es " + mostrar);

document.getElementById("ganancia").innerHTML = mostrar;
