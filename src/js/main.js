// Dica - dividir em micro tarefa
const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".select-convertido");

function converterValor() {
  const input = document.querySelector(".input-valor").value;
  const converter = document.querySelector(".converter");
  const convertido = document.querySelector(".convertido");

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    convertido.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(input / dolarToday);
  }

  if (currencySelect.value == "euro") {
    convertido.textContent = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(input / euroToday);
  }

  converter.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);
}

function changeCurrency() {
  const moeda = document.querySelector(".moeda");
  const bandeira = document.querySelector(".bandeira-convertida");

  if (currencySelect.value == "dolar") {
    moeda.textContent = "Dólar Americano";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  if (currencySelect.value == "euro") {
    moeda.textContent = "Euro";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  converterValor();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", converterValor);
