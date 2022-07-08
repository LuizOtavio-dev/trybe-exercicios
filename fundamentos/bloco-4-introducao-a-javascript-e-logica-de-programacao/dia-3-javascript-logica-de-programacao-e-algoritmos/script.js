const factorial = 10;
let resultado = factorial;

for (let index = factorial - 1; index > 0; index -= 1) {
  resultado *= index;
}

console.log(resultado);
