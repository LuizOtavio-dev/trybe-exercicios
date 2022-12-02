import Swal from 'sweetalert2'
import './style.css';

const inputCoin = document.querySelector('#input-coin');
const btnSearch = document.querySelector('#btn-search');
const listCoin = document.querySelector('#list-coin');

const API = 'https://api.exchangerate.host';

const createList = (data) => {
  const rates = Object.entries(data);

  rates.forEach(rate => {
    const li = document.createElement('li');
    li.innerHTML = `${rate[0]}: ${rate[1]}`;
    li.className = 'rate';
    listCoin.appendChild(li);
  });
};

btnSearch.addEventListener('click', () => {
  const COIN = inputCoin.value;

  fetch(`${API}/${COIN}`)
    .then(res => res.json())
    .then(({ rates }) => {
      if (!rates) throw new Error ('Você precisa passar uma moeda!');

      const coinRates = Object.keys(rates)
      const valueIsTrue = coinRates.some(rate => rate === COIN.toUpperCase());
      
      if (!valueIsTrue) throw new Error('Moeda não existente!');

      createList(rates);
    })
    .catch(error => {
      Swal.fire({
        title: 'Ops ...',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    });
});
