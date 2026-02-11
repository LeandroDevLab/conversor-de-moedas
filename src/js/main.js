// Dica - dividir em micro tarefa
const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".select-convertido");

function converterValor() {
  const input = document.querySelector(".input-valor").value;
  const converter = document.querySelector(".converter");
  const convertido = document.querySelector(".convertido");
  const moeda = document.querySelector(".moeda-convertida");
  const bandeira = document.querySelector(".bandeira-convertida");

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    convertido.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(input / dolarToday);
    moeda.textContent = "Dólar Americano";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  if (currencySelect.value == "euro") {
    convertido.textContent = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(input / euroToday);
    moeda.textContent = "Euro";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  converter.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);
}

currencySelect.addEventListener("change", converterValor);
convertButton.addEventListener("click", converterValor);
