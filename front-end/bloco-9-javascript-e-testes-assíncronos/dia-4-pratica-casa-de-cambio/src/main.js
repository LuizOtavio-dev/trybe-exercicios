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
    .then(({ rates }) => createList(rates))
    .catch(error => window.alert(error.message));
});
