import getRefs from './refs';
const refs = getRefs();

const cleanCountryMarkup = () => {
  refs.countryBox.innerHTML = '';
  refs.countryList.innerHTML = '';
  return;
};

export { cleanCountryMarkup };
