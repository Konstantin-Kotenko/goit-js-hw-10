import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import countryInfoTpl from './template/country-info.hbs';
import countryListTpl from './template/country-list.hbs';

import { fetchCountries } from './js/fetchCountries.js';
import { cleanCountryMarkup } from './js/clean.js';
import { refs } from './js/refs.js';

const DEBOUNCE_DELAY = 300;

const onSearchCountry = e => {
  const name = e.target.value.trim();

  if (name === '') {
    return cleanCountryMarkup();
  }

  fetchCountries(name).then(country => {
    cleanCountryMarkup();
    if (country.length >= 2 && country.length <= 10) {
      const markuCountryListTpl = countryListTpl(country);
      refs.countryList.innerHTML = markuCountryListTpl;
    }
    if (country.length === 1) {
      const markupCountryInfo = countryInfoTpl(country);
      refs.countryBox.innerHTML = markupCountryInfo;
    }
    if (country.length > 10) {
      return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
  });
};

refs.input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));
