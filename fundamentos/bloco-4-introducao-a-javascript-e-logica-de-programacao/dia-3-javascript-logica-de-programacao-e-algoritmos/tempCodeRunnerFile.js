
const n = 5;
const asterisk = '*';

for (let index = 0; index <= n; index += 1) {
  console.log(asterisk.padStart(n, asterisk));
};

// exercício 2

let lineAsterisk = '';

for (let index = 0; index <= n; index += 1) {
  lineAsterisk += asterisk;
  console.log(lineAsterisk);
};

// exercício 3

let position = n - 1;

for (let index = 0; index < n; index += 1) {
  for (let counter = 0; counter < n; counter += 1) {
    if (counter < position) {
      lineAsterisk += ' ';
    } else {
      lineAsterisk += asterisk;
    }
  };
  console.log(lineAsterisk);
  lineAsterisk = '';
  position -= 1;
};
