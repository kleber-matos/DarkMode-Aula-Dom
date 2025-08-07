// Outras formas de selecionar elementos no DOM:
// document.querySelector("button")
// document.getElementsByClassName("classe")

// Seleciona o botão pelo ID "btn"
const btn = document.getElementById("btn");

// Cria uma variável para controlar o modo (true = claro, false = escuro)
let mode = true;

// Adiciona um evento de clique no botão
btn.addEventListener("click", () => {
  // Verifica se o modo atual é claro
  if (mode) {
    // Aplica o modo escuro: fundo escuro e texto branco
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  } else {
    // Aplica o modo claro: fundo branco e texto preto
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  }

  // Inverte o valor da variável mode (alternância entre claro e escuro)
  mode = !mode;
});
