const chessPiece = "REI";

switch (chessPiece.toLocaleLowerCase()) {
  case "peao":
    console.log("Movimenta-se apenas uma casa para frente e captura outras peças em diagonal");
    break;
  case "torre":
    console.log("Movimenta-se em direção reta pelas colunas ou fileiras");
    break;
  case "cavalo":
    console.log('Movimenta-se em forma de "L", é a única peça que pode pular sobre as outras');
    break;
  case "bispo":
    console.log("Movimenta-se nas diagonais");
    break;
  case "rei":
    console.log("Movimenta-se apenas uma casa para qualquer direção");
    break;
  case "rainha":
    console.log("Movimenta-se para todas as direções sem limite de casa");
    break;
  default:
    console.log("Erro! Peça não encontrada");
    break;
}
