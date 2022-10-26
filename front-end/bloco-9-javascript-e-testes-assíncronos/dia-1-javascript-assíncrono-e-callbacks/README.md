# Dia 1

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre operações assíncronas e callbacks; 🚀 

Os requisitos do exercício são:

1. Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas?

  const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
    `${name} está a ${value} ${measurementUnit} de distância do Sol`;

  const MEASUREMENT_UNIT = 'quilômetros';

  const mars = {
    name: 'Marte',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: MEASUREMENT_UNIT,
    },
  };

  const venus = {
    name: 'Venus',
    distanceFromSun: {
      value: 108200000,
      measurementUnit: MEASUREMENT_UNIT,
    },
  };

  const jupiter = {
    name: 'Jupiter',
    distanceFromSun: {
      value: 778500000,
      measurementUnit: MEASUREMENT_UNIT,
    },
  };

  console.log(planetDistanceFromSun(mars)); // A
  console.log(planetDistanceFromSun(venus)); // B
  console.log(planetDistanceFromSun(jupiter)); // C

2. Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas?

  const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
    `${name} está a ${value} ${measurementUnit} de distância do Sol`;

  const MEASUREMENT_UNIT = 'quilômetros';

  const mars = {
    name: 'Marte',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: MEASUREMENT_UNIT,
    },
  };

  const venus = {
    name: 'Venus',
    distanceFromSun: {
      value: 108200000,
      measurementUnit: MEASUREMENT_UNIT,
    },
  };

  const jupiter = {
    name: 'Jupiter',
    distanceFromSun: {
      value: 778500000,
      measurementUnit: MEASUREMENT_UNIT,
    },
  };

  console.log(planetDistanceFromSun(mars)); // A
  setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
  setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

3. A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique a função getPlanet, de forma que Marte seja impresso assincronamente, após 4 segundos.

  const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    console.log('Returned planet: ', mars);
  };

  getPlanet(); // Imprime Marte depois de 4 segundos

4. Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:

  - A função sendMarsTemperature imprima no console o seguinte texto: “A temperatura de Marte é: temperaturaAtual graus celsius” onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e

  - A mensagem deve ser impressa no console depois de no máximo 5 segundos.

  const messageDelay = () => Math.floor(Math.random() * 5000);

  const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
  };

  // crie a função sendMarsTemperature abaixo

  sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

5. Agora que você fez a função que envia a temperatura de Marte, vamos utilizar essa temperatura para realizar outras operações. No código abaixo, temos as funções temperatureInFahrenheit e greet. Elas irão utilizar a temperatura obtida pela função getMarsTemperature para realizar nossas operações. Escreva a função sendMarsTemperature de forma que:

  - A função sendMarsTemperature receba uma callback;

  - A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.

  const messageDelay = () => Math.floor(Math.random() * 5000);

  const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
  };

  const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

  const temperatureInFahrenheit = (temperature) =>
    console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

  const greet = (temperature) =>
    console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

  // Definição da função sendMarsTemperature...

  sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

  sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

6. Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

  const messageDelay = () => Math.floor(Math.random() * 5000);

  const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
  }

  const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

  const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

  const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

  const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

  // definição da função sendMarsTemperature...

  // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
  sendMarsTemperature(temperatureInFahrenheit, handleError);

  // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
  sendMarsTemperature(greet, handleError);

7. A função uppercase recebe um parâmetro str e uma callback. Esta função transforma as letras de uma palavra em letras maiúsculas. Escreva um teste que verifique a chamada da função uppercase. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

  const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

8. Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon!

  No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle.

  Complete a função handlePokemonSearch de modo que:

    - Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.

    - Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.

  const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grama',
      ability: 'Raio Solar',
    },
    {
      name: 'Charmander',
      type: 'Fogo',
      ability: 'Lança Chamas',
    },
    {
      name: 'Squirtle',
      type: 'Água',
      ability: 'Jato de Água',
    },
  ];

  function getPokemonDetails(selectedPokemon, callback) {
    const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

    setTimeout(() => {
      if (foundPokemon === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }

      const { name, type, ability } = foundPokemon;

      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

      callback(null, messageFromProfOak);
    }, 2000);
  }

  const handlePokemonSearch = (error, message) => {
    // Implemente a callback de tratamento de erro
  };

  getPokemonDetails(/* selectedPokemon*/, handlePokemonSearch);

9. A fim de evitar que futuros treinadores de Pokémon sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui esses Pokémon. Para isso, você deve criar um novo arquivo .test.js ou .spec.js e copiar o código abaixo. Lembre-se de completar os testes para a função getPokemonDetails de acordo com as especificações.

  // Verifique se a importação do arquivo correto está sendo feita.
  const { getPokemonDetails } = require('./get-pokemon-details');

  describe('A função getPokemonDetails', () => {
    it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
      // Escreva aqui seu código
    });

    it('retorna um pokémon que existe no banco de dados', () => {
      // Escreva aqui seu código
    });
  });

10. Para este exercício, você tentará adivinhar a saída dos console.log dos testes abaixo sem executá-los, vendo se compreendeu bem o funcionamento do beforeEach e do afterEach.

  beforeEach(() => console.log('1 - beforeEach'));
  afterEach(() => console.log('1 - afterEach'));

  test('', () => console.log('1 - test'));

  describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));

    test('', () => console.log('2 - test'));
  });