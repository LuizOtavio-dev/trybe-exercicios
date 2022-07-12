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
