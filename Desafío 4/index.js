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
      return `La semana tuvo ganancias de:  ${this.capital}`;
    } else {
      this.capital = this.ingresos - this.gastos;
      console.log("La semana tuvo perdidas de: ", this.capital);
      return `La semana tuvo perdidas de:  ${this.capital}`;
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
  const div = document.createElement("div");
  div.className = "div";
  div.innerHTML = semana.ganancia();
  document.body.appendChild(div);
}
