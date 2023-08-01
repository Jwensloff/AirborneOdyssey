// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

import { createFetchRequests } from './apiCalls';
console.log('This is the JavaScript entry file - your code begins here.');

let masterData = {}

window.addEventListener('load', () => {
  Promise.all(createFetchRequests()).then((promiseArray) => {
    masterData.travelers = promiseArray[0]
    masterData.trips = promiseArray[1]
    masterData.destinations = promiseArray[2]
    console.log('masterData', masterData);
  });
});