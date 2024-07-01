const apiUrl = 'https://restcountries.com/v3.1/all';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    createCountryCards(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  function createCountryCards(countriesData) {
    const countriesContainer = document.getElementById('countries-container');
  
    countriesContainer.innerHTML = '';
  
    countriesData.forEach(country => {
      const card = document.createElement('div');
      card.classList.add('col-lg-4', 'col-md-6', 'mb-4');
  
      const cardInner = document.createElement('div');
      cardInner.classList.add('card', 'h-100');
  
      const flagImg = document.createElement('img');
      flagImg.classList.add('card-img-top');
      flagImg.src = country.flags.png;
      flagImg.alt = `${country.name.common} flag`;
      flagImg.style.objectFit = 'cover';
      flagImg.style.height = '200px';
      cardInner.appendChild(flagImg);
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const countryName = document.createElement('h4');
      countryName.classList.add('card-title');
      countryName.textContent = country.name.common;
  
      const countryDetails = document.createElement('ul');
      countryDetails.classList.add('list-group', 'list-group-flush');
  
      const capitalItem = document.createElement('li');
      capitalItem.classList.add('list-group-item');
      capitalItem.innerHTML = `<strong>Capital:</strong> ${country.capital}`;
  
      const regionItem = document.createElement('li');
      regionItem.classList.add('list-group-item');
      regionItem.innerHTML = `<strong>Region:</strong> ${country.region}`;
  
      const populationItem = document.createElement('li');
      populationItem.classList.add('list-group-item');
      populationItem.innerHTML = `<strong>Population:</strong> <i class="fas fa-users"></i> ${country.population.toLocaleString()}`;
  
      const languageItem = document.createElement('li');
      languageItem.classList.add('list-group-item');
      languageItem.innerHTML = `<strong>Language(s):</strong> ${Object.values(country.languages).join(', ')}`;
  
      const currencyItem = document.createElement('li');
      currencyItem.classList.add('list-group-item');
      currencyItem.innerHTML = `<strong>Currency:</strong> ${Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}`;
  
      countryDetails.appendChild(capitalItem);
      countryDetails.appendChild(regionItem);
      countryDetails.appendChild(populationItem);
      countryDetails.appendChild(languageItem);
      countryDetails.appendChild(currencyItem);
  
      cardBody.appendChild(countryName);
      cardBody.appendChild(countryDetails);
  
      cardInner.appendChild(cardBody);
      card.appendChild(cardInner);
  
      countriesContainer.appendChild(card);
    });
  }
  