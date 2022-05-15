const BASE_URL = 'https://restcountries.com/v3.1/name/';
const filds = '?fields=name,capital,population,flags,languages';

function fetchCountries(name) {
  fetch(`${BASE_URL}${name}${filds}`).then(res => res.json());
}

export { fetchCountries };
