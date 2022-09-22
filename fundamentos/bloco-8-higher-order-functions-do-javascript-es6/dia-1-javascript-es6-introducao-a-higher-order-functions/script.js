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

console.log(bet(3));