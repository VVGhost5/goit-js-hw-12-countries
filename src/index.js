import './styles.css';
import promiseResult from './js/fetchCountries.js';
import error from './js/alert.js';
import {
  resultShowed,
  filterCountries,
  showVariants,
  clearVariants,
  clearResult,
  showResult,
} from './js/countryHandlerFunctions.js';

const inputRef = document.querySelector('.input');
let debounce = require('lodash.debounce');

const readTheData = event => {
  if (!event.target.value) {
    clearVariants();
    clearResult();
    return;
  }
  promiseResult(event.target.value).then(data => {
    if (data.length > 10) {
      clearVariants();
      clearResult();
      return error({
        title: 'Too many matches found. Please enter a more specific query!',
      });
    }
    if (data.length >= 2) {
      clearResult();
      return showVariants(data);
    }
    if (!resultShowed && data.length > 0) {
      clearVariants();
      showResult(data);
    }
  });
};

inputRef.addEventListener('input', debounce(readTheData, 500));
