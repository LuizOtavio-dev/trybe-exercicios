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

// Exercício 2

const longestWord = (phrase) => {
  const word = phrase.split(' ');
  let longest = '';
  for (const iterator of word) {
    iterator.length > longest.length ? longest = iterator : longest;
  }
  return longest;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Exercício 4

const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const encontraX = frase.split(' ');
  const novaFrase = [];
  for (const iterator of encontraX) {
    iterator === 'x' ? novaFrase.push(nome) : novaFrase.push(iterator);
  }
  return novaFrase.join(' ');
}

const minhasSkills = frase => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let fraseCompleta = 
  `
  ${frase} 

  Minhas três principais habilidades são:
  
  - ${skills[0]}
  
  - ${skills[1]}
  
  - ${skills[2]}
  `;

  return fraseCompleta;
}

console.log(minhasSkills(substituaX('Luiz')));