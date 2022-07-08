// exercício 1

const factorial = 10;
let resultado = factorial;

for (let index = factorial - 1; index > 0; index -= 1) {
  resultado *= index;
}

console.log(resultado);

// exercício 2

let word = 'luiz';
let reverseWord = ''
let otherWay = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  reverseWord = reverseWord.concat(word[index]);
  otherWay = otherWay + word[index]
};

console.log(reverseWord);
console.log(otherWay);
