import React, { Component } from 'react';

import '../styles/about.css';

class About extends Component {
  render() {
    const url = 'https://gifs.eco.br/wp-content/uploads/2022/03/gifs-da-pokedex-de-pokemon-1.gif';
    return (
      <>
        <h1>About Pokédex</h1>
        <section>
          <p>
            This is a list of Pokémon in the order dictated by the National
            Pokédex, meaning that Pokémon from the Kanto region will appear
            first, followed by those from Johto, Hoenn, Sinnoh, Unova, Kalos,
            Alola, Galar, Hisui, and Paldea. Each region's set of Pokémon
            starts with its own set of starter Pokémon and their evolutions,
            going in order of Grass, Fire, Water; the only exception is Unova,
            which begins with Victini, who is then followed by the starter
            Pokémon.
          </p>
          <p>
            The first 151 entries in this Pokédex also serve as Kanto's regional
            Pokédex. In Generation II, this Pokédex order was known as the "Old
            Pokédex", with a new order that put related Pokémon near each other
            also included.
          </p>
          <img src={ url } alt="pokedex" className='pokedex-image' />
        </section>
      </>
    )
  }
}

export default About;
