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
