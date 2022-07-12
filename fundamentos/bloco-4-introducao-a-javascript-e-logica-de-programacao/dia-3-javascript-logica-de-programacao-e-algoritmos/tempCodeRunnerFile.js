const numberNatural = 47;
let isPrime = true;

for (let counter = 2; counter < numberNatural; counter += 1) {
  if (numberNatural % counter === 0) {
    isPrime = false;
  };
};
if (isPrime === true) {
  console.log('O número ' + numberNatural + ' é primo.');
}else {
  console.log('O número ' + numberNatural + ' não é primo.');
};
