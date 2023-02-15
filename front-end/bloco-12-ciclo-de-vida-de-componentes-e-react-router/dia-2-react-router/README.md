# Dia 2

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre React Router; 🚀

## Pokédex - React Router

O desafio de hoje é incrementar uma aplicação de Pokédex utilizando React Route, onde é exibido um card com informações de um Pokémon e um botão para navegar entre uma lista de Pokémon. Também é possível filtrar por tipos específicos. Além dessas funcionalidades, você terá que adicionar novas rotas na aplicação, para que seja possível visualizar mais informações de cada Pokémon e até favoritar os Pokémon que você mais gosta.

### Requisitos

  - Exercício 1

    - Faça com que a Pokédex seja mostrada ao carregar a aplicação no caminho de URL "/".

  - Exercício 2

    - Adicione um link de navegação para o pokémon que está sendo mostrado pela Pokédex, de forma que quem usar a aplicação consiga clicar no link para ver mais detalhes do pokémon em questão.

  - Exercício 3

    - Crie um componente PokemonDetails para ser usado na visualização de mais detalhes do pokémon no passo anterior. É preciso que sejam mostradas as seguintes informações:

      - Nome do pokémon;

      - Tipo do pokémon;

      - Peso do pokémon, com sua devida medida de peso;

      - Sumário informativo a respeito do pokémon;

      - Mapa(s) que mostra(m) as possíveis localizações do pokémon.

  - Exercício 4

    - Adicione um conjunto fixo de links de navegação no topo de sua aplicação, de forma que ele esteja sempre disponível para quem fizer uso.

  - Exercício 5

    - Crie um componente About para ser usado na visualização que explica brevemente o que é uma Pokédex, com alguma imagem ilustrativa.

  - Exercício 6

    - Adicione no conjunto fixo de links de navegação um link que permita levar quem usa sua aplicação para a visualização de explicação da Pokédex.

  - Exercício 7

    - Crie um componente NotFound, de forma que somente ele seja renderizado caso o caminho atual da URL da aplicação não corresponda a nenhuma rota definida anteriormente.

### Bônus

  - Exercício 8

    - Fazer com que o link, o qual leva para a página de detalhes de um Pokémon, seja exibido apenas na página /, ou seja, ele não deve ser exibido na tela detalhes.

  - Exercício 9

    - Permita que um pokémon consiga ser favoritado dentro de sua visualização de mais detalhes.

    - Uma vez favoritado, adicione algum indicativo visual, de forma que quem ver o pokémon saberá que ele foi favoritado. O indicativo de que o pokémon foi favoritado também precisa aparecer na página principal, que mostra a Pokédex.

  - Exercício 10

    - Crie uma visualização que mostre somente os pokémons favoritados. Torne-a acessível para quem a usar, criando um link para ela no conjunto fixo de links que você fez anteriormente.

  - Exercício 11

    - Salve os pokémons favoritados no local storage e recupere-os quando a aplicação for inicializada.
