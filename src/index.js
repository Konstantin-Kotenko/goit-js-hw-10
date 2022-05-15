import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
// import { fetchCountries } from './js/fetchCountries';
import countryInfoTpl from './templare/country-info.hbs';
import countryListTpl from './templare/country-list.hbs';

const countryBox = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const input = document.querySelector('input#search-box');

const DEBOUNCE_DELAY = 300;

// fetch('https://restcountries.com/v3.1/name/sw?fields=name,capital,population,flags,languages')
//   .then(response => {
//     return response.json();
//   })
//   .then(country => {
//     if (country.length >= 2 && country.length <= 10) {
//       const markuCountryListTpl = countryListTpl(country);
//       console.log(markuCountryListTpl);
//     }
//     if (country.length === 1) {
//       const markupCountryInfo = countryInfoTpl(country);
//       console.log(markupCountryInfo);
//     }
//     if (country.length > 10) {
//       return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//     }
//   });

const onSearchCountry = e => {
  const name = e.target.value.trim();

  if (name === '') {
    return;
  }

  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
  )
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return Notiflix.Notify.failure('Oops, there is no country with that name');
    })
    .then(country => {
      if (country.length >= 2 && country.length <= 10) {
        const markuCountryListTpl = countryListTpl(country);
        console.log(markuCountryListTpl);
      }
      if (country.length === 1) {
        const markupCountryInfo = countryInfoTpl(country);
        console.log(markupCountryInfo);
      }
      if (country.length > 10) {
        return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
    });
  // .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));
};

input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));
