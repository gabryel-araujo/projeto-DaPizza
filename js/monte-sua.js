var tamanhoPizza = document.getElementById("tamanho");
var tipoMassa = document.getElementById("massa");
var tipoQueijo = document.getElementById("queijo");

var selecionarQuantidade = document.getElementById("recheio");

var recheio1 = document.getElementById("divSabor1");
var recheio2 = document.getElementById("divSabor2");
var recheio3 = document.getElementById("divSabor3");

var tipoBorda = document.getElementById("borda");

const preco = document.querySelector("#enviar");

// const enviarButton = document.querySelector('#enviar');
// enviarButton.addEventListener('click', prices());

function montarPizza() {
  if (selecionarQuantidade.value == 0) {
    alert("selecione uma opção");
    recheio1.className = "hidden";
    recheio2.className = "hidden";
    recheio3.className = "hidden";
  }

  if (selecionarQuantidade.value == 1) {
    recheio1.className = "";
    recheio2.className = "hidden";
    recheio3.className = "hidden";
  }

  if (selecionarQuantidade.value == 2) {
    recheio1.className = "";
    recheio2.className = "";
    recheio3.className = "hidden";
  }

  if (selecionarQuantidade.value == 3) {
    recheio1.className = "";
    recheio2.className = "";
    recheio3.className = "";
  }
}

selecionarQuantidade.addEventListener("change", montarPizza);

function prices() {
  let texto;

  let preco1;
  let preco2;
  let preco3;
  let preco4;
  let preco41;
  let preco42;
  let preco5;

  switch (tamanhoPizza) {
    case "Pequena":
      preco1 = 15;
      break;
    case "Média":
      preco1 = 20;
      break;
    case "Grande":
      preco1 = 25;
      break;
    case "Família":
      preco1 = 30;
      break;
  }
  switch (tipoMassa) {
    case "Tradicional":
      preco2 = 15;
      break;
    case "Integral":
      preco2 = 20;
      break;
    case "Siciliana":
      preco2 = 25;
      break;
    case "Napolitana":
      preco2 = 30;
      break;
  }
  switch (tipoQueijo) {
    case "Mussarela":
      preco3 = 15;
      break;
    case "Parmessão":
      preco3 = 20;
      break;
    case "Provolone":
      preco3 = 25;
      break;
    case "Cheddar":
      preco3 = 30;
      break;
  }
  // Recheios:
  switch (recheio1) {
    case "Calabresa":
      preco4 = 15;
      break;
    case "Bacon":
      preco4 = 20;
      break;
    case "Ovo":
      preco4 = 25;
      break;
    case "Manjericão":
      preco4 = 30;
      break;
  }
  switch (recheio2) {
    case "Nada":
      preco41 = 0;
      break;
    case "Calabresa":
      preco41 = 15;
      break;
    case "Bacon":
      preco41 = 20;
      break;
    case "Ovo":
      preco41 = 25;
      break;
    case "Manjericão":
      preco41 = 30;
      break;
  }
  switch (recheio3) {
    case "Nada":
      preco42 = 0;
      break;
    case "Calabresa":
      preco42 = 15;
      break;
    case "Bacon":
      preco42 = 20;
      break;
    case "Ovo":
      preco42 = 25;
      break;
    case "Manjericão":
      preco42 = 30;
      break;
  }
  // Fim do recheios
  switch (tipoBorda) {
    case "Chocolate":
      preco5 = 15;
      break;
    case "Catupiry":
      preco5 = 20;
      break;
    case "Cheddar":
      preco5 = 25;
      break;
    case "Sem Borda":
      preco5 = 30;
      break;
  }
  let total = preco1 + preco2 + preco3 + preco4 + preco41 + preco42 + preco5;
  texto = `De tamanho ${tamanhoPizza} massa ${tipoMassa} com queijo ${tipoQueijo}, recheio de ${recheio1} e borda recheada de ${tipoBorda}, ficou um total de: ${total}R$`;
  preco.value = texto;
}
