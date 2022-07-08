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

// exercício 5

let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index]
  }  
}

console.log(higherNumber);

// exercício 6

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

// exercício 7

let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log(smallestNumber);

// exercício 8

let arrayNumbers = [];

for (let index = 1; index <= 25; index += 1) {
  arrayNumbers.push(index);
}

console.log(arrayNumbers);

// exercício 9

for (const number of arrayNumbers) {
  console.log(number / 2);
};

// bônus
// exercício 1

// primeira forma

let orderedNumbers = numbers.sort(function(a, b){return a - b});

console.log(orderedNumbers);

// segunda forma

for (let index = 1; index < numbers.length; index += 1) {
  for (let counter = 0; counter < index; counter += 1) {
    if (numbers[index] < numbers[counter]) {
      let position = numbers[index];
      numbers[index] = numbers[counter];
      numbers[counter] = position;
    }
  }
};

console.log(numbers);

// exercício 2

// primeira forma

let decreasingNumbers = numbers.sort(function(a, b){return b - a});

console.log(orderedNumbers);

// segunda forma

for (let index = 1; index < numbers.length; index += 1) {
  for (let counter = 0; counter < index; counter += 1) {
    if (numbers[index] > numbers[counter]) {
      let position = numbers[index];
      numbers[index] = numbers[counter];
      numbers[counter] = position;
    }
  }
};

console.log(numbers);
