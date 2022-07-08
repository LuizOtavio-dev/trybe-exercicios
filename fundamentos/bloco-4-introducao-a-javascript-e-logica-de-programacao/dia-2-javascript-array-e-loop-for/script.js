let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
};

// exercício 2

let total = 0;

for (let index = 0; index < numbers.length; index += 1) {
  total += numbers[index];
};

console.log(total);

// exercício 3

let media = total / numbers.length;

console.log(media);

// exercício 4

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// exercicio 5

let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index]
  }  
}

console.log(higherNumber);

// exercicio 6

let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddNumbers += 1;
  }
};

if (oddNumbers > 0) {
  console.log(oddNumbers);
} else {
  console.log("nenhum valor ímpar encontrado");
};

// exercicio 7

let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log(smallestNumber);

// exercicio 8

let arrayNumbers = [];

for (let index = 1; index <= 25; index += 1) {
  arrayNumbers.push(index);
}

console.log(arrayNumbers);

// exercicio 9

for (const number of arrayNumbers) {
  console.log(number / 2);
};
