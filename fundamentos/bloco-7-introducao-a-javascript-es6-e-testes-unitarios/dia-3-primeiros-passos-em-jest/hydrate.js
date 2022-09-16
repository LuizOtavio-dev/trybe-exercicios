function hydrate(string) {
  let reg = /\d+/g;
  let amount = string.match(reg);
  let result = 0;
  let suggestion = '';
  for (const iterator of amount) result += Number(iterator);
  if (result > 1) suggestion = `${result} copos de água`;
  else { suggestion = `${result} copo de água`; }
  return suggestion;
}

module.exports = hydrate;