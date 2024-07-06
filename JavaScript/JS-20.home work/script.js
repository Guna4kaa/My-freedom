async function fetchCurrencyRates(baseCurrency) {
    const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
    const data = await response.json();
    return data.rates;
}

async function populateCurrencyDropdowns() {
    const response = await fetch('https://open.er-api.com/v6/latest');
    const data = await response.json();
    const rates = data.rates;
    const currencyDropdowns = document.querySelectorAll('select');

    for (let currencyDropdown of currencyDropdowns) {
        for (let currency in rates) {
            const option = document.createElement('option');
            option.text = currency;
            option.value = currency;
            currencyDropdown.add(option);
        }
    }
}

async function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    if (!fromCurrency || !toCurrency || !amount) {
        alert('Please select currencies and enter amount');
        return;
    }

    const rates = await fetchCurrencyRates(fromCurrency);
    const rate = rates[toCurrency];
    const result = amount * rate;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

populateCurrencyDropdowns();