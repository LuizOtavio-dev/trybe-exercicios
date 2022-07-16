let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let infoTioPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';
console.log(info);

for (const key in info) {
  console.log(key);
}

for (const key in info) {
  console.log(info[key]);
}

for (const key in info) {
  if (info[key] !== infoTioPatinhas[key]) {
    console.log(info[key] + ' e ' + infoTioPatinhas[key]);
  } else {console.log('Ambos recorrentes')}
}
