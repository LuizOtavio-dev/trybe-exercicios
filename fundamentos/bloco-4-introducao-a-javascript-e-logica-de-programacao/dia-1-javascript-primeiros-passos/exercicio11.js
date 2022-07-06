const grossSalary = 1500.10;

let inss;
let ir;
let totalTax;
let liquidSalary;

if (grossSalary <= 1556.94) {
  inss = (grossSalary * 8) / 100;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  inss = (grossSalary * 9) / 100;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  inss = (grossSalary * 11) / 100;
} else {
  inss = 570.88
}

if (grossSalary <= 1903.98) {
  ir = 0;
} else if (grossSalary >= 1903.99 && grossSalary <= 2826.65) {
  ir = (grossSalary * 7.5) / 100 + 142.80;
} else if (grossSalary >= 2826.66 && grossSalary <= 3751.05) {
  ir = (grossSalary * 15) / 100 + 354.80;
} else if (grossSalary >= 3751.06 && grossSalary <= 4664.68) {
  ir = (grossSalary * 22.5) / 100 + 636.13;
} else {
  ir = (grossSalary * 27.5) / 100 + 869.36;
}

totalTax = inss + ir
liquidSalary = grossSalary - totalTax;
