import Notiflix from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1';
const filds = '?fields=name,capital,population,flags,languages';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}${filds}`).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    return Notiflix.Notify.failure('Oops, there is no country with that name');
  });
}

export default { fetchCountries };
