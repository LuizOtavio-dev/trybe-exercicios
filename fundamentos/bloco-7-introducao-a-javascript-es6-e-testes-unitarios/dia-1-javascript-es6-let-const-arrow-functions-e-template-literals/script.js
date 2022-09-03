// Parte 1
// Exercício 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}. Ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => oddsAndEvens.sort(function(a, b){return a - b});

const phrase = `Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`

console.log(phrase);

// Parte 2
// Exercício 1

const mult = (number) => {
  let result = 2;
  for (let index = 3; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

const factorial = number => number === 0 ? 1 : mult(number);

const phraseFactorial = `Esse é o fatorial ${factorial(5)}`

console.log(phraseFactorial);