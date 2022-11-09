import validator from 'validator';

const input = document.querySelector('#input');
const select = document.querySelector('#select');
const button = document.querySelector('#btn');
const answer = document.querySelector('#answer');


button.addEventListener('click', (event) => {
  event.preventDefault();
  
  const fields = {
    rg: validator.isTaxID(input.value, 'pt-BR'),
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    tel: validator.isMobilePhone(input.value, 'pt-BR'),
    address: validator.isLocale(input.value),
    email: validator.isEmail(input.value),
  }

  answer.innerHTML = `A validação retornou ${fields[select.value]}`
});