
const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")       

function convertValues () {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    const currencyValueToConvertEuro = document.querySelector(".euro")
    const currencyValueToConvertBtc = document.querySelector(".btc")
    
    console.log(currencySelect.value)


    const dolarToday = 5.42
    const euroToday = 6.37
    const btcToday = 86.025


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
             currency: "USD"})
             .format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
             currency: "EUR"})
             .format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "BTC") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
             currency: "BTC"})
             .format(inputCurrencyValue / btcToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
         currency: "BRL"})
         .format(inputCurrencyValue)
         
} 

function changeCurrency () {

  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"

  }
    if (currencySelect.value == "BTC") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

    convertValues()
} 

currencySelect.addEventListener("change", changeCurrency) 

convertButton.addEventListener("click", convertValues)