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
// Função para cadastrar um vinho
function cadastrarVinho(numeroCadastro) {
  alert("Iniciando o cadastro de vinhos.");
  var nome = validarEntrada("Digite o nome do vinho: ");
  var tipo = validarEntrada("Digite o tipo do vinho (Tinto, Branco ou Rosê): ");
  var safra = parseInt(validarEntrada("Digite a safra do vinho: "));
  var quantidade = parseInt(validarEntrada("Digite a quantidade do vinho: "));

  console.log("Dados do Vinho:");
  console.log("Nome:", nome);
  console.log("Tipo:", tipo);
  console.log("Safra:", safra);
  console.log("Quantidade:", quantidade);

  if (verificarEstoqueBaixo(quantidade)) {
    estoqueBaixoTotal++;
    console.log("Aviso: Estoque baixo!");
  } else {
    console.log("Estoque bom");
  }

  const classificacao = classificarSafra(safra);
  console.log("Classificação da Safra:", classificacao);

  if (safra < safraMaisAntiga) {
    safraMaisAntiga = safra;
    vinhoSafraMaisAntiga = nome;
  }


  alert(`Vinho "${nome}" cadastrado com sucesso! Verifique os detalhes no console.`);
}
var continuarComprando = "s";
while (continuarComprando === "s") {
  numCasdastro++;
  cadastrarVinho(numCasdastro);
  continuarComprando = prompt("Gostaria de cadastrar outro vinho? (s/n)").toLowerCase();
}

alert("Cadastro finalizado. Confira os dados no console.");
console.log("\n--- Resumo do Cadastro ---");
console.log("Total de cadastros realizados:", numCasdastro);
console.log("Total de vinhos com estoque baixo:", estoqueBaixoTotal);
if (numCasdastro > 0) {
  console.log("Vinho com a safra mais antiga:", vinhoSafraMaisAntiga, "(" + safraMaisAntiga + ")");
} else {
  console.log("Nenhum vinho foi cadastrado.");
}