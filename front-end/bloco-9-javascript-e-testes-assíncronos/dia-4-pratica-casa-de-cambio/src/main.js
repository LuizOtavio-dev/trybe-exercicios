import Swal from 'sweetalert2'
import './style.css';

const inputCoin = document.querySelector('#input-coin');
const btnSearch = document.querySelector('#btn-search');
const listCoin = document.querySelector('#list-coin');
const titleCoin = document.querySelector('#title-coin')

const API = 'https://api.exchangerate.host/latest?base=';

const createList = (data) => {
  const rates = Object.entries(data);

  listCoin.innerHTML = '';

  rates.forEach(rate => {
    const [coin, value] = rate;
    const li = document.createElement('li');
    li.innerHTML = `${coin}: ${value.toFixed(3)}`;
    li.className = 'rate';
    listCoin.appendChild(li);
  });
};

const fetchAPI = () => {
  const COIN = inputCoin.value.toUpperCase();
  
  fetch(`${API}${COIN}`)
  .then(res => res.json())
  .then(({ rates, base }) => {
      if (!COIN) throw new Error ('Você precisa passar uma moeda!');
      if (base !== COIN) throw new Error('Moeda não existente!');
     
      titleCoin.innerHTML = `Valores referentes a 1 ${COIN}`;
      
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
};

btnSearch.addEventListener('click', fetchAPI);
