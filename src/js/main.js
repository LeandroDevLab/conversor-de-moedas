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
  const rate = selectedOption.dataset.rate;

  if (currencySelect.value == "dolar") {
    convertido.textContent = formatarMoeda().format(input / rate);
    moeda.textContent = "Dólar Americano";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  if (currencySelect.value == "euro") {
    convertido.textContent = convertido.textContent = formatarMoeda().format(input / rate);
    moeda.textContent = "Euro";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }
  if (currencySelect.value == "libra") {
    convertido.textContent = convertido.textContent = formatarMoeda().format(input / rate);
    moeda.textContent = "Libra";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  converter.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);
}

currencySelect.addEventListener("change", converterValor);
convertButton.addEventListener("click", converterValor);
