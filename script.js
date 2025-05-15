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
// Função para classificar a safra do vinho
function classificarSafra(safra) {
  if (safra >= 2020) {
    return "Vinho jovem";
  } else if (safra >= 2015 && safra <= 2019) {
    return "Vinho amadurecido";
  } else {
    return "Vinho antigo";
  }
}

// Função para cadastrar um vinho
function cadastrarVinho(numeroCadastro) {
  alert("Iniciando o cadastro de vinhos.");
  var nome = validarEntrada("Digite o nome do vinho: ");
  var tipo = validarEntrada("Digite o tipo do vinho (Tinto, Branco ou Rosê): ");
  var safra = parseInt(validarEntrada("Digite a safra do vinho: "));
  var quantidade = parseInt(validarEntrada("Digite a quantidade do vinho: "));
}