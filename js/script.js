var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var tentativas = 0;
var maximoTentativas = 5;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  
 if (chute == numeroSecreto) {
   elementoResultado.innerHTML = "Você Acertou!";
 } 
  else if (chute > 10 || chute <0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  }
  else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Errou! O numero chutado é menor que o numero secreto";
  }
  else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Errou! O numero chutado é maior que o numero secreto";
  }
  else {
    resultado.innerHTML = "Errou! " + numeroSecreto;
  }
}