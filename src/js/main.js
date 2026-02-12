// Dica - dividir em micro tarefa
const inputValor = document.querySelector(".input-valor");
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

  const raw = inputValor.dataset.value;
  if (!raw) return;
  const input = Number(raw);

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

function currencyMask(input, locale, currency) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  input.addEventListener("input", (e) => {
    let rawValue = e.target.value.replace(/\D/g, "");

    // deixa vazio se apagar tudo
    if (!rawValue) {
      input.dataset.value = "";
      e.target.value = "";
      return;
    }

    const value = Number(rawValue) / 100;

    input.dataset.value = value;
    e.target.value = formatter.format(value);
  });
}

currencyMask(inputValor, "pt-BR", "BRL");

currencySelect.addEventListener("change", converterValor);
convertButton.addEventListener("click", converterValor);
