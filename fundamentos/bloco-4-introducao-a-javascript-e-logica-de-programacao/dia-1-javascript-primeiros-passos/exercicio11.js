const grossSalary = 3000.00;

let inss;
let ir;
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

liquidSalary = grossSalary - inss;

if (liquidSalary <= 1903.98) {
  ir = 0;
} else if (liquidSalary >= 1903.99 && liquidSalary <= 2826.65) {
  ir = (liquidSalary * 7.5) / 100 - 142.80;
} else if (liquidSalary >= 2826.66 && liquidSalary <= 3751.05) {
  ir = (liquidSalary * 15) / 100 - 354.80;
} else if (liquidSalary >= 3751.06 && liquidSalary <= 4664.68) {
  ir = (liquidSalary * 22.5) / 100 - 636.13;
} else {
  ir = (liquidSalary * 27.5) / 100 - 869.36;
}

liquidSalary -= ir;
