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
  const COIN = inputCoin.value.toUpperCase();

  fetch(`${API}/${COIN}`)
    .then(res => res.json())
    .then(({ rates }) => {
      const valueIsTrue = Object.entries(rates).some(rate => rate[0] === COIN);
      !valueIsTrue || !rates 
        ? new Error
        : createList(rates)
    })
    .catch(error => {
      Swal.fire({
        title: 'Coin not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    });
});
