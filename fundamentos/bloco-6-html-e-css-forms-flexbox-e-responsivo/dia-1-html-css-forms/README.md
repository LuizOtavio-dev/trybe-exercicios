# Dia 1

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre formulários em HTML; 🚀 

Os requisitos do exercício são:

### Criando um formulário para concorrer a uma viagem

O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado form.html.

1. O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
  Nome Completo:
    Limitado entre 10 e 40 caracteres.
  E-mail:
    Limitado entre 10 e 50 caracteres.
  Destino Preferido:
    4 opções: Cidade, Campo, Praia, Montanhas.
  Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
    Limite de 500 caracteres.
  Qual a melhor data para realizar sua viagem?
    Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
  Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

Esses serão os principais campos utilizadas nos próximos exercícios.

2. Crie um botão para enviar as informações preenchidas.

Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.

  Dica: Coloque a tag <script> no final do seu body.

3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?

4. Crie um botão que limpe as informações contidas nos campos;

### Bônus

1. A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

2. Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
