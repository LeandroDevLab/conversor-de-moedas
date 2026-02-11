// Dica - dividir em micro tarefa
const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".select-convertido");
const convertido = document.querySelector(".convertido");

function formatarMoeda(locate, currency) {
  return new Intl.NumberFormat(locate, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function converterValor() {
  const input = document.querySelector(".input-valor").value;
  const converter = document.querySelector(".converter");
  const moeda = document.querySelector(".moeda-convertida");
  const bandeira = document.querySelector(".bandeira-convertida");

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    convertido.textContent = formatarMoeda("en-US", "USD").format(input / dolarToday);
    moeda.textContent = "Dólar Americano";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  if (currencySelect.value == "euro") {
    convertido.textContent = convertido.textContent = formatarMoeda("de-DE", "EUR").format(
      input / euroToday,
    );
    moeda.textContent = "Euro";
    bandeira.src = `./assets/img/${currencySelect.value}.png`;
  }

  converter.textContent = formatarMoeda("pt-BR", "BRL").format(input);
}

currencySelect.addEventListener("change", converterValor);
convertButton.addEventListener("click", converterValor);
