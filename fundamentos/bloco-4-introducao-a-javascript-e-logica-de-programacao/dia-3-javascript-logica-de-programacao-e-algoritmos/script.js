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

// exercício 4

const number = 50;
let primeNumbers = [];
let biggestPrimeNumber = 0;

for (let index = 2; index <= number; index += 1) {
  let prime = true;
  for (let counter = 2; counter < index; counter += 1) {
    if (index % counter === 0) {
      prime = false;
    };
  };
  if (prime === true) {
    primeNumbers.push(index);
  };
};

biggestPrimeNumber = primeNumbers[primeNumbers.length - 1];

console.log(biggestPrimeNumber);

// bônus
// exercício 1

const n = 5;
const asterisk = '*';

for (let index = 0; index < n; index += 1) {
  console.log(asterisk.padStart(n, asterisk));
};

// exercício 2

let lineAsterisk = '';

for (let index = 0; index < n; index += 1) {
  lineAsterisk += asterisk;
  console.log(lineAsterisk);
};

// exercício 3

let position = n - 1;

for (let index = 0; index < n; index += 1) {
  lineAsterisk = '';
  for (let counter = 0; counter < n; counter += 1) {
    if (counter < position) {
      lineAsterisk += ' ';
    } else {
      lineAsterisk += asterisk;
    }
  };
  console.log(lineAsterisk);
  position -= 1;
};

// exercicio 4

const middle = (n + 1) / 2;
let leftSide = middle;
let rightSide = middle;

for (let index = 0; index <= middle; index += 1) {
  lineAsterisk = '';
  for (let counter = 0; counter <= n; counter += 1) {
    if (counter > leftSide && counter < rightSide) {
      lineAsterisk += asterisk;
    } else {
      lineAsterisk += ' ';
    }
  };
  console.log(lineAsterisk);
  leftSide -= 1;
  rightSide += 1;
};

// exercicio 5

const size = 7
const pyramidCenter = (size + 1) / 2;
let left = pyramidCenter;
let right = pyramidCenter;

for (let index = 1; index <= pyramidCenter; index += 1) {
  lineAsterisk = '';
  for (let counter = 1; counter <= size; counter += 1) {
    if (counter === left || counter === right || index === pyramidCenter) {
      lineAsterisk += asterisk;
    } else {
      lineAsterisk += ' ';
    }
  };
  console.log(lineAsterisk);
  left -= 1;
  right += 1;
};
