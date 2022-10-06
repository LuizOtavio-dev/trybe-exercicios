const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let total = 0;
  names.forEach(name => {
    const letters = name.split('');
    total += letters.reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc + 1 : acc, 0)
  });
  return total;
}