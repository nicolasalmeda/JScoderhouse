class Presupuesto {
  constructor(impuestos, gastoEmpleados, dias) {
    this.impuestos = impuestos;
    this.gastoEmpleados = gastoEmpleados;
    this.dias = dias;
    this.gastoTotal = this.impuestos + this.gastoEmpleados;
    this.cantDias = [];
    this.presupuesto = 0;
  }

  gananciaTotal() {
    let sumador = 0;
    let cant = this.dias;

    for (cant; cant > 0; cant--) {
      let ganancias = parseInt(prompt("Ingrese las ganancias del dia " + cant));
      console.log(ganancias);
      if (ganancias > this.gastoTotal) {
        const div = document.createElement("div");
        div.className = "elemento";
        console.log("Este día fue positivo");

        let total = ganancias - this.gastoTotal;
        console.log(
          "Las ganancias del día" + " " + cant + " " + "fue" + " " + total
        );

        div.innerHTML = `Las ganancias del dia ${cant} fue de ${total} `;
        document.body.appendChild(div);

        this.cantDias.push(total);
        sumador = sumador + total;
      } else {
        const div = document.createElement("div");
        div.className = "elemento";
        console.log("El día fue negativo ");

        let perdida = ganancias - this.gastoTotal;
        console.log(
          "La perdida total del dia" + " " + cant + " " + "fue" + " " + perdida
        );
        div.innerHTML = `La perdida del día ${cant} fue de ${perdida} `;
        document.body.appendChild(div);
        this.cantDias.push(perdida);

        sumador = sumador + perdida;
      }
    }

    this.presupuesto = sumador;
  }

  ganancia(ganancias, cant) {
    const div = document.createElement("div");
    div.className = "elemento";
    console.log("Este día fue positivo");

    let total = ganancias - this.gastoTotal;
    console.log(
      "Las ganancias del día" + " " + cant + " " + "fue" + " " + total
    );

    div.innerHTML = `Las ganancias del dia ${dias} fue de ${total} `;
    document.body.appendChild(div);

    this.cantDias.push(total);
    return total;
  }

  perdidas(ganancias, cant) {
    const div = document.createElement("div");
    div.className = "elemento";
    console.log("El día fue negativo ");

    let perdida = ganancias - this.gastoTotal;
    console.log(
      "La perdida total del dia" + " " + cant + " " + "fue" + " " + perdida
    );
    div.innerHTML = `La perdida del día ${dias} fue de ${perdida} `;
    document.body.appendChild(div);
    this.cantDias.push(perdida);
    return perdida;
  }

  mostrarGastoTotal() {
    document.getElementById("gastos").innerHTML = this.gastoTotal;
  }

  mostrarGananciaTotal() {
    alert("Las ganacias totales de los días ingresados es " + this.presupuesto);

    document.getElementById("ganancia").innerHTML = this.presupuesto;
  }

  mostrarCantDias() {
    this.cantDias.forEach((element) => console.log(element + " "));
  }
}

const presupuesto1 = new Presupuesto(
  parseFloat(prompt("Ingrese el gasto de impuestos")),
  parseInt(prompt("Ingrese el gasto de los empleados ")),
  parseInt(prompt("Ingrese la cantidad de dias "))
);

presupuesto1.gananciaTotal();
presupuesto1.mostrarGananciaTotal();
presupuesto1.mostrarGastoTotal();
presupuesto1.mostrarCantDias();
