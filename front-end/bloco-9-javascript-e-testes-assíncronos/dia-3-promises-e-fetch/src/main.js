import Swal from 'sweetalert2';
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
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
