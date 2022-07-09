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
