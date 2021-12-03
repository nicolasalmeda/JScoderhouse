$(document).ready(function () {
  const ingresos = [
    new Ingreso("Sueldo", 2000),
    new Ingreso("Venta de Auto", 1500),
  ];

  const egresos = [new Egreso("Alquiler dpto", 900), new Egreso("Ropa", 400)];

  $("#sd").click(function (e) {
    e.preventDefault();
    cargarCabecero();
    cargarIngresos();
  });

  /* let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
  };*/

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

    $("#presupuesto").append(presupuesto);
    $("#porcentaje").append(porcentajeEgreso);
    $("#ingresos").append(totalIngresos());
    $("#egresos").append(totalEgresos());

    //document.getElementById("presupuesto").innerHTML = presupuesto;
    //document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
    //document.getElementById("ingresos").innerHTML = totalIngresos();
    //document.getElementById("egresos").innerHTML = totalEgresos();
  };

  const cargarIngresos = () => {
    let ingresosHtml = "";
    for (let ingreso of ingresos) {
      ingresosHtml += crearIngresoHTML(ingreso);
    }
    $("#lista-ingresos").append(ingresosHtml);
    //document.getElementById("lista-ingresos").innerHTML = ingresosHtml;
  };

  const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = ` <div class="elemento limpiarEstilos">
    <div class="elemento_description">${ingreso.description}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${ingreso.valor}</div>
      </div>
    </div>`;
    return ingresoHTML;
  };

  $("#bf").click(function (e) {
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let description = forma["description"];
    let valor = forma["valor"];
    if (description.value != "" && valor.value !== "") {
      if (tipo.value === "ingreso") {
        ingresos.push(new Ingreso(description.value, Number(valor.value)));
        cargarCabecero();
        cargarIngresos();
      } else if (tipo.value === "egreso") {
      }
    }
  });
});
