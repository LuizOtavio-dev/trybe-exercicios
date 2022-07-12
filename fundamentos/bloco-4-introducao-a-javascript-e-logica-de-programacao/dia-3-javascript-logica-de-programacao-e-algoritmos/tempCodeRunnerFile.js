const n = 5;
const asterisk = '*';
let lineAsterisk = '';

middle = (n + 1) / 2;
leftSide = middle;
rightSide = middle;

for (let index = 0; index <= middle; index += 1) {
  for (let counter = 0; counter <= n; counter += 1) {
    if (counter > leftSide && counter < rightSide) {
      lineAsterisk += asterisk;
    } else {
      lineAsterisk += ' ';
    }
  };
  console.log(lineAsterisk);
  lineAsterisk = '';
  leftSide -= 1;
  rightSide += 1;
};
