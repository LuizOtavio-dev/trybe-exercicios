const angleA = 60;
const angleB = 60;
const angleC = 60;
let result = angleA + angleB + angleC;

if (angleA < 0 || angleB < 0 || angleC < 0) {
  console.log("erro");
} else if (result != 180) {
  console.log(false);
} else {
  console.log(true);
}
