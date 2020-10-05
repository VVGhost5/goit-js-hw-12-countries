import countriesList from '../templates/countriesTemplate.hbs';
import country from '../templates/countryTemplate.hbs';
const countriesListRef = document.querySelector('.countries-list');
const countryRef = document.querySelector('.country');
let resultShowed = false;

const filterCountries = array => {
  return array.map(el => el.name);
};

const showVariants = countries => {
  const markup = countriesList(filterCountries(countries));
  countriesListRef.innerHTML = markup;
};

const clearVariants = () => {
  countriesListRef.innerHTML = '';
};

const clearResult = () => {
  resultShowed = false;
  countryRef.innerHTML = '';
};

const showResult = countries => {
  const markup = country(countries[0]);
  countryRef.insertAdjacentHTML('afterbegin', markup);
  resultShowed = true;
};

export {
  resultShowed,
  filterCountries,
  showVariants,
  clearVariants,
  clearResult,
  showResult,
};
