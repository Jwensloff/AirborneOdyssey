// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
const dayjs = require('dayjs')
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

import { createFetchRequests } from './apiCalls';

import { findUsersTrips, 
  getCurrentUserInformation, 
  findUserTripDestinations,
  calculateTotalUserSpending,
 } from './functions';

import { displayUserName,
  displayUserSpending,
  displayUserTrips,
  showMainPage,
  loginButton, 
 } from './domUpdates';


console.log('This is the JavaScript entry file - your code begins here.');

// event listeners 
loginButton.addEventListener('click', showMainPage)


// create Data
let masterData = {
  currentUserId: 19,
  today: dayjs().format('YYYY/MM/DD'),
}

window.addEventListener('load', () => {
  Promise.all(createFetchRequests()).then((promiseArray) => {
    masterData.travelers = promiseArray[0].travelers;
    masterData.trips = promiseArray[1].trips;
    masterData.destinations = promiseArray[2].destinations;
    console.log('masterData', masterData);
    generateWebPage();
  });
});

const generateWebPage = () => {
  masterData.currentUser = getCurrentUserInformation(masterData.currentUserId, masterData.travelers)
  console.log(masterData.currentUser)
  displayUserName(masterData.currentUser)
  console.log(findUsersTrips(masterData.currentUserId, masterData.trips))
  console.log(findUserTripDestinations(findUsersTrips(masterData.currentUserId, masterData.trips), masterData.destinations))
  console.log(calculateTotalUserSpending(findUsersTrips(masterData.currentUserId, masterData.trips), findUserTripDestinations(findUsersTrips(masterData.currentUserId, masterData.trips), masterData.destinations)))
  displayUserSpending(calculateTotalUserSpending(findUsersTrips(masterData.currentUserId, masterData.trips), findUserTripDestinations(findUsersTrips(masterData.currentUserId, masterData.trips), masterData.destinations)))
  displayUserTrips(findUsersTrips(masterData.currentUserId, masterData.trips),findUserTripDestinations(findUsersTrips(masterData.currentUserId, masterData.trips), masterData.destinations))
};