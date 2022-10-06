const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const average = grades.map(grade => grade.reduce((acc, curr) => acc += curr))
  return students.map((student, index) => ({name: student, average: average[index] / grades[index].length}))
}