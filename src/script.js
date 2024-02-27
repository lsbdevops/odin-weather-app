import "./style.css";
import getData from './weatherInterface';

// Default location.
getData('melbourne');

const locationSearchBox = document.querySelector('#location-search');
const locationSearchBtn = document.querySelector('#submit-location-search');
const errorMsg = document.querySelector('#error-msg');

locationSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (locationSearchBox.value && locationSearchBox.validity.valid) {
        errorMsg.textContent = '';
        getData(locationSearchBox.value);
    }
    else if (locationSearchBox.validity.valueMissing) {
        errorMsg.textContent = 'Error: Search field empty.';
    }
    else if (locationSearchBox.validity.patternMismatch) {
        errorMsg.textContent = 'Error: Search must only include letters.';
    }
})