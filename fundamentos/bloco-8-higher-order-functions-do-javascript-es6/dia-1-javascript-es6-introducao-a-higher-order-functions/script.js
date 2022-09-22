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

console.log(newEmployees(personHired));