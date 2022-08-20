# Dia 4

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre CSS Flexbox; 🚀 

Os requisitos do exercício são:

### Agora a prática

Para os exercícios a seguir, crie um arquivo HTML e um arquivo CSS, copie o código abaixo e siga as instruções de cada enunciado.

<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRYFLIX</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="header-container">
      <nav class="menu-container">
        <ul>
          <li>Cadastre-se</li>
          <li>Conecte-se</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <section class="logo-container">
        <img
          src="https://fontmeme.com/permalink/201215/2044acc483426f38dc2c79c3c84ab998.png"
          alt="Website Logo"
        />
      </section>
    </header>

  </body>
</html>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}

body {
  background-color: rgb(247, 247, 247);
}

.header-container {
  background-color: #5C687C;
  display: flex;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.menu-container {
  display: flex;
}

.menu-container ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.menu-container li {
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  list-style: none;
  margin-right: 10px;
}

### Parte 1

1. Adicione uma propriedade que defina o tamanho Flexbox base para o container da imagem 268px e para o container do menu 500px.

2. Adicione uma propriedade Flexbox que modifique a ordem em que a logomarca e os itens do menu aparecem na tela.

3. Adicione uma propriedade Flexbox que faça o container do menu crescer, quando houver espaço disponível.

4. Utilize a propriedade align-self no elemento correto.

### Parte 2

Vamos continuar praticando com a continuação do header realizado no exercício acima e construir um main com o restante de sua página. Copie o restante dos códigos HTML e CSS e aplique a seus documentos criados anteriormente.

    <main class="main-container">
      <section class="movie-container">
        <section>
          <h2>Assista hoje</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </section>
        <article>
          <h2>Mais assitidos</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </article>
      </section>
  <aside class="aside-container">
    <h3>Últimas notícias</h3>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>
  </aside>
</main>

.main-container {
  display: flex;
  flex-wrap: wrap;
}

.movie-container {
  display: flex;
  flex-direction: column;
}

.movie-container h2 {
  margin: 40px 0;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container div {
  align-items: center;
  background-color: #5C687C;
  border: black solid 1px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.aside-container h3, h4 {
  margin-bottom: 10px;
  text-align: center;
}

.aside-container p {
  margin: 10px 0;
  text-align: justify;
}

1. Aplique uma base de 350px para seu container aside.

2. Aplique um alinhamento para centralizar e outro para expandir.

3. Adicione uma propriedade que faça com que seu container de filmes tenha uma base de 700px e outra base de 16% para as div do container de seu card.

4. Aplique uma propriedade com o valor 10 que expanda o container de filmes.

5. Adicione uma propriedade com o valor 1 que faça com que suas div do container de filmes ocupe todo o espaço em branco.

### Parte 3 (opcional)

Para finalizar, escolha alguns exercícios antigos como, por exemplo, o portfólio ou até mesmo os projetos de HTML, CSS e JavaScript e estruture as páginas utilizando Flexbox.

### Bonus

Para treinar ainda mais as propriedades estudadas de Flexbox reunimos alguns exercícios gameficados que são super divertidos.🚀

  [Flexbox Web Flow](https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1)

  [Flexbox Froggy - exercícios de 14 a 24](https://flexboxfroggy.com/)

  [Flexbox Defense - exercícios de 10 a 12](http://www.flexboxdefense.com/)
