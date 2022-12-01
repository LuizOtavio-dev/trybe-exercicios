# Dia 3

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre Promises e Fetch; 🚀 

Os requisitos do exercício são:

### API de Super Heróis

Vamos criar uma aplicação que busca a imagem e o nome de uma super heroína ou um super herói. Para isso, utilize a SuperHero API 
(https://www.superheroapi.com/). A aplicação deve contar também com um alerta, para o caso da API retornar algum erro. Aqui vale uma sugestão: experimente usar a biblioteca SweetAlert2 (https://sweetalert2.github.io/) 😉

1. Crie um projeto npm do zero.

2. Estruture uma página HTML que contenha: um card com a imagem da super heroína ou do super herói e um botão.

3. O card deve conter a imagem e o nome da pessoa. Esses dados serão providos pela API (Se liga aí: você pode ler a documentação da API para saber exatamente quais campos você deve utilizar aqui).

4. O botão deve gerar um número aleatório, que será o ID utilizado para a API (Se liga aí: você pode simular um erro da API se solicitar um id maior do que a APi pode retornar. Por exemplo: há 500 ids cadastrados e você solicita um número aleatório até 750).

5. O botão deve buscar na API pelo ID e renderizar na tela o nome e a imagem da pessoa.

6. Caso haja algum erro durante a requisição à API, a aplicação deve emitir um alerta informando o erro ocorrido.

  Atenção: A API SuperHero API utiliza um token de acesso criado com uma conta no Facebook. Caso você não tenha ou não deseje utilizar uma conta do Facebook, há essa outra API (https://akabab.github.io/superhero-api/api/) que possui os mesmos dados, porém retornados de uma forma diferente. Aconselhamos a você a olhar como essa API funciona e, ao final do gabarito, conferir uma solução proposta usando a mesma.

### Bônus - Select Pet

Você gosta de ver imagens de gatinhos e cachorrinhos fofinhos? Então você vai gostar desse exercício! Vamos criar uma aplicação que exibe fotos aleatórias de cães e gatos. Você poderá escolher qual tipo de animal quer ver a imagem, ou pode escolher a opção “Surprise me” e deixar a sorte definir qual pet será exibido. Gostou da ideia? Vamos para as etapas necessárias:

1. Crie um novo projeto usando o npm. Instale e configure o vite para usá-lo como web server.

2. Crie uma nova página que tenha os seguintes elementos:

  - um botão com o texto Get random dog;
  - um botão com o texto Get random cat;
  - um botão com o texto Surprise me;
  - uma imagem que deve ter como texto alternativo Random pet. Essa imagem começará com o atributo src vazio.

3. Quando o botão Get random dog for clicado, faça uma requisição para a API https://dog.ceo/api/breeds/image/random. Essa API irá retornar um objeto com a imagem de um cachorro aleatório. Utilize a tag de imagem criada no item 2 para exibir a imagem retornada pela API.

4. Quando o botão Get random cat for clicado, faça uma requisição para a API https://aws.random.cat/meow. Essa API irá retornar um objeto com a imagem de um gato aleatório. Utilize a tag de imagem criada no item 2 para exibir a imagem retornada pela API.

5. Quando o botão Surprise me for clicado, faça duas requisições: uma para a API de imagens de gatos (https://aws.random.cat/meow) e outra para API de imagens de cachorros (https://dog.ceo/api/breeds/image/random). Exiba somente a imagem da API que retornar primeiro. Ignore o resultado da segunda requisição e também ignore o resultado caso alguma requisição retorne com erro.

  💡Dica: lembre-se dos métodos usados para lidar com várias promises. Qual deles pode ser usado quando queremos o retorno da promise que resolve primeiro, ignorando os casos de erro?