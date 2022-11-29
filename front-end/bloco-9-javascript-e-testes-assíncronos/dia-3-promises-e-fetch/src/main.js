import './style.css';

const imgSuperHero = document.querySelector('#image');
const nameSuperHero = document.querySelector('#name');
const btnSort = document.querySelector('#btn');

const API = 'https://www.superheroapi.com/api.php/528883825782155';
const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

btnSort.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  fetch(`${API}/${id}`)
    .then((res) => res.json())
    .then(({ image, name }) => {
      imgSuperHero.src = image.url;
      imgSuperHero.alt = `Imagem do super heroi ${name}`;
      nameSuperHero.innerHTML = name;
    })
    // eslint-disable-next-line no-alert
    .catch((error) => alert(error.message));
});
