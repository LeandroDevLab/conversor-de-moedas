// Dica - dividir em micro tarefa
const form = document.querySelector("form");

const elements = {
  inputValor: form.querySelector(".input-valor"),
  convertButton: form.querySelector(".convertButton"),
  currentSelectFrom: form.querySelector(".select-converter"),
  currentSelectTo: form.querySelector(".select-convertido"),
  convertido: document.querySelector(".convertido"),
};

function convert(input, convertFrom, convertTo) {
  if (!input) return;
  return (Number(input) * convertFrom) / convertTo;
}

function formatarMoeda() {
  const selectedOption = elements.currentSelectTo.selectedOptions[0];
  //console.log(currentSelectTo.selectedOptions[0]);  //debug
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
  const selectedOptionFrom = elements.currentSelectFrom.selectedOptions[0];
  const selectedOptionTo = elements.currentSelectTo.selectedOptions[0];
  const inputValueToConvert = Number(elements.inputValor.dataset.value);
  const value = convert(
    inputValueToConvert,
    selectedOptionFrom.dataset.rate,
    selectedOptionTo.dataset.rate,
  );

  const converter = document.querySelector(".converter");
  const moedaConvertida = document.querySelector(".moeda-convertida");
  const moedaConverter = document.querySelector(".moeda-converter");
  const bandeiraConvertida = document.querySelector(".bandeira-convertida");
  const bandeiraConverter = document.querySelector(".bandeira-converter");

  // Valor convertido
  elements.convertido.textContent = formatarMoeda().format(value);
  moedaConvertida.textContent = selectedOptionTo.textContent;
  moedaConverter.textContent = selectedOptionFrom.textContent;
  bandeiraConvertida.src = `./assets/img/${elements.currentSelectTo.value}.png`;
  bandeiraConverter.src = `./assets/img/${elements.currentSelectFrom.value}.png`;

  // Valor a converter
  converter.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValueToConvert);
}

elements.currentSelectTo.addEventListener("change", converterValor);
elements.currentSelectFrom.addEventListener("change", converterValor);
elements.convertButton.addEventListener("click", converterValor);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  converterValor();
});

//Assiste e formata o input
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
