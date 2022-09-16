const techList = (arr, name) => {
  const arrOrder = arr.sort();
  let result = [];
  if (arr.length === 0) result = 'Vazio!'; 
  else for (const key in arrOrder) result.push({tech: arrOrder[key], name}) 
  return result
}

module.exports = techList;