import { refs } from './refs';

export const cleanCountryMarkup = () => {
  refs.countryBox.innerHTML = '';
  refs.countryList.innerHTML = '';
  return;
};
