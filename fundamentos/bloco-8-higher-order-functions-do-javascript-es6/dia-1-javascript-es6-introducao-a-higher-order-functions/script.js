// Exercício 1
const personHired = (fullName) => {
  const codeName = fullName.split(' ');
  return { fullName, email: `${codeName.join('_').toLowerCase()}@trybe.com` };
}

const newEmployees = (person) => {
  const employees = {
    id1: person('Pedro Guerra'),
    id2: person('Luiza Drumond'),
    id3: person('Carla Paiva'),
  }
  return employees;
};

newEmployees(personHired);

// Exercício 2
const checkBet = (number, drawn) =>  number === drawn ? 'Parabéns você ganhou!!' : 'Tente novamente!!';

const bet = (numberBet) => {
  const drawnNumber = Math.floor(Math.random() * 5) + 1;
  return checkBet(numberBet, drawnNumber)
}

bet(3);

// Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (right, answer) => {
  let points = 0;
  for (const key in right) {
    if (right[key] === answer[key]) points += 1;
    if (right[key] !== answer[key] && answer[key] !== 'N.A') points -= 0.5;
  }
  return `Total de pontos obtidos: ${points}.`;
};

const evaluatesStudent = (right, answer, points) => points(right, answer);

evaluatesStudent(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers);

// Bônus
// Exercício 1 - Parte 1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (damage) => Math.floor(Math.random() * (damage - 15 + 1) + 15);

dragonDamage(battleMembers.dragon.strength);