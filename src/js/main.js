// Dica - dividir em micro tarefa
const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".select-convertido");
const convertido = document.querySelector(".convertido");

//option selecionada
const selectedOption = currencySelect.selectedOptions[0];
//console.log(selectedOption);

function formatarMoeda() {
  const selectedOption = currencySelect.selectedOptions[0];
  //console.log(currencySelect.selectedOptions[0]);  //debug
  const locale = selectedOption.dataset.locale;
  const currency = selectedOption.dataset.currency;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function converterValor() {
  const selectedOption = currencySelect.selectedOptions[0];
  const input = document.querySelector(".input-valor").value;
  const converter = document.querySelector(".converter");
  const moeda = document.querySelector(".moeda-convertida");
  const bandeira = document.querySelector(".bandeira-convertida");
  const rate = Number(selectedOption.dataset.rate);

  // Valor convertido
  convertido.textContent = formatarMoeda().format(input / rate);
  moeda.textContent = selectedOption.textContent;
  bandeira.src = `./assets/img/${currencySelect.value}.png`;

  // Valor a converter
  converter.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);
}

currencySelect.addEventListener("change", converterValor);
convertButton.addEventListener("click", converterValor);
