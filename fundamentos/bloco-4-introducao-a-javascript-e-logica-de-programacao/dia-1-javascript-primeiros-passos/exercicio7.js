const percentage = -400;
let note;

if (percentage >= 90 && percentage <= 100) {
  note = "A";
} else if (percentage >= 80 && percentage < 90) {
  note = "B";
} else if (percentage >= 70 && percentage < 80) {
  note = "C";
} else if (percentage >= 60 && percentage < 70) {
  note = "D";
} else if (percentage >= 50 && percentage < 60) {
  note = "E";
} else if (percentage >= 0 && percentage < 50) {
  note = "F";
} else {
  note = "Erro!"
}
