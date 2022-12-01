import './style.css';

const btnGetDog = document.querySelector('#btn-get-dog');
const btnGetCat = document.querySelector('#btn-get-cat');
const btnSuprise = document.querySelector('#btn-surprise');
const imgRandom = document.querySelector('#img-random');

const API_DOG = 'https://dog.ceo/api/breeds/image/random';
const API_CAT = 'https://aws.random.cat/meow';

btnGetDog.addEventListener('click', () => {
  fetch(API_DOG)
    .then((res) => res.json())
    .then(({ message }) => {
      imgRandom.src = message;
    });
});

btnGetCat.addEventListener('click', () => {
  fetch(API_CAT)
    .then((res) => res.json())
    .then(({ file }) => {
      imgRandom.src = file;
    });
});

btnSuprise.addEventListener('click', () => {
  Promise.any([
    fetch(API_DOG),
    fetch(API_CAT),
  ])
    .then((res) => res.json())
    .then((data) => {
      const imgURL = Object.values(data)[0];
      imgRandom.src = imgURL;
    });
});
