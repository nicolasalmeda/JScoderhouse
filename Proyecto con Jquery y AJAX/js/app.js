$(document).ready(function () {
  const ingresos = [
    new Ingreso("Sueldo", 2000),
    new Ingreso("Venta de Auto", 1500),
  ];

  const egresos = [new Egreso("Alquiler dpto", 900), new Egreso("Ropa", 400)];

  $("#sd").click(() => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
  });

  /* let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
  };*/

  const formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };
  const formatoPorcentaje = (valor) => {
    return valor.toLocaleString("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
    });
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

    $("#presupuesto").html(formatoMoneda(presupuesto));
    $("#porcentaje").html(formatoPorcentaje(porcentajeEgreso));
    $("#ingresos").html(formatoMoneda(totalIngresos()));
    $("#egresos").html(formatoMoneda(totalEgresos()));

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
    $("#lista-ingresos").html(ingresosHtml);
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

  const cargarEgresos = () => {
    let egresosHtml = "";
    for (let egreso of egresos) {
      egresosHtml += crearEgresoHTML(egreso);
    }

    $("#lista-egresos").html(egresosHtml);
  };

  const crearEgresoHTML = (egreso) => {
    let egresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_description">${egreso.description}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${egreso.valor}</div>
      <div class="elemento_porcentaje">${formatoPorcentaje(
        egreso.valor / totalEgresos()
      )}</div>
      </div>
      </div>
      `;
    return egresoHTML;
  };

  $("#bf").click(function () {
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let description = forma["description"];
    let valor = forma["valor"];
    if (description.value != "" && valor.value !== "") {
      if (tipo.value === "ingreso") {
        ingresos.push(new Ingreso(description.value, Number(valor.value)));
        //cargarCabecero();
        cargarIngresos();
        cargarEgresos();
      } else if (tipo.value === "egreso") {
        egresos.push(new Egreso(description.value, Number(valor.value)));
        cargarEgresos();
        cargarIngresos();
      }
    }
  });

  $("#bmf").click(() => {
    $.getJSON("ingresosFijos.json", function (respuesta, estado) {
      if (estado === "success") {
        let misDatos = respuesta;
        for (const dato of misDatos) {
          $("#ingresos-fijos").html(` <div class="elemento limpiarEstilos">
          <div class="elemento_description">${dato.description}</div>
          <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${dato.valor}</div>
            </div>
          </div>`);
        }
      } else {
      }
    });
  });
});
