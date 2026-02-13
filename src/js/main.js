// Dica - dividir em micro tarefa
const form = document.querySelector("form");

const elements = {
  inputValor: form.querySelector(".input-valor"),
  convertButton: form.querySelector(".convertButton"),
  currencySelect: form.querySelector(".select-convertido"),
  convertido: document.querySelector(".convertido"),
};

//option selecionada
const selectedOption = elements.currencySelect.selectedOptions[0];

function formatarMoeda() {
  const selectedOption = elements.currencySelect.selectedOptions[0];
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
  const selectedOption = elements.currencySelect.selectedOptions[0];

  const raw = elements.inputValor.dataset.value;
  if (!raw) return;
  const input = Number(raw);

  const converter = document.querySelector(".converter");
  const moeda = document.querySelector(".moeda-convertida");
  const bandeira = document.querySelector(".bandeira-convertida");
  const rate = Number(selectedOption.dataset.rate);

  // Valor convertido
  elements.convertido.textContent = formatarMoeda().format(input / rate);
  moeda.textContent = selectedOption.textContent;
  bandeira.src = `./assets/img/${elements.currencySelect.value}.png`;

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

currencyMask(elements.inputValor, "pt-BR", "BRL");

elements.currencySelect.addEventListener("change", converterValor);
elements.convertButton.addEventListener("click", converterValor);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  converterValor();
});
