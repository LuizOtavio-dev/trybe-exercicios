import './style.css';

const btnGetDog = document.querySelector('#btn-get-dog');
// const btnGetCat = document.querySelector('#btn-get-cat');
// const btnSuprise = document.querySelector('#btn-surprise');
const imgRandom = document.querySelector('#img-random');

const API = 'https://dog.ceo/api/breeds/image/random';

btnGetDog.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(API)
    .then((res) => res.json())
    .then(({ message }) => {
      imgRandom.src = message;
    });
});
