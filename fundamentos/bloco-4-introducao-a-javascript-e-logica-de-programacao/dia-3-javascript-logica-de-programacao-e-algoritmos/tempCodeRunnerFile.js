const number = 50;
let primeNumbers = [];
let biggestPrimeNumber = 0;

for (let index = 2; index <= number; index += 1) {
  let prime = true;
  for (let counter = 2; counter < index; counter += 1) {
    if (index % counter === 0) {
      prime = false;
    }
  }
  if (prime === true) {
    primeNumbers.push(index);
  }
}
