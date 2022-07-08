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

// exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (biggestWord.length < array[index].length) {
    biggestWord = array[index];
  };
};

for (let index = 1; index < array.length; index += 1) {
  if (smallestWord.length > array[index].length) {
    smallestWord = array[index];
  };
};

console.log(biggestWord);
console.log(smallestWord);
