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

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

const phraseFactorial = `Esse é o fatorial ${factorial(5)}`

console.log(phraseFactorial);