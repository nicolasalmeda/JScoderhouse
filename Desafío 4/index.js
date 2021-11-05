class Ganancias {
  constructor(ingresos, gastos) {
    this.ingresos = ingresos;
    this.gastos = gastos;
    this.capital = 0;
  }

  ganancia() {
    if (this.ingresos > this.gastos) {
      this.capital = this.ingresos - this.gastos;
      console.log("La semana tuvo ganancias de: ", this.capital);
    } else {
      this.capital = this.ingresos - this.gastos;
      console.log("La semana tuvo peridas de: ", this.capital);
    }
  }
}

const semanas = [];

let bandera = true;
do {
  let band;
  let result;

  semanas.push(
    new Ganancias(
      parseFloat(prompt("Ingrese las ganancias")),
      parseFloat(prompt("Ingrese los gastos"))
    )
  );

  band = prompt(
    "Ingrese SI para agregar otra semana o ingrese NO para finalizar"
  );
  result = band.toUpperCase();
  if (result === "NO") {
    bandera = false;
  }
} while (bandera);

for (const semana of semanas) {
  semana.ganancia();
}
