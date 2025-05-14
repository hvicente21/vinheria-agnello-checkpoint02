var numCasdastro = 0;
var estoqueBaixoTotal = 0;
var safraMaisAntiga = 9999; 
var vinhoSafraMaisAntiga = "";

// Função para validar a entrada do usuário
function validarEntrada(mensagem) {
  var entrada = prompt(mensagem);
  while (entrada === "") {
    alert("Vinho não inserido.");
    entrada = prompt(mensagem);
  }
  return entrada;
}

// Função para verificar se o estoque está baixo
function verificarEstoqueBaixo(quantidade) {
  if (quantidade < 5) {
    console.log("Estoque baixo!");
    return true;
  }
  return false;
}
