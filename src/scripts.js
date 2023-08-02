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
  calculateUserSpending,
 } from './functions';

import { displayUserName,
  displayUserSpending,
  displayUserTrips,
 } from './domUpdates';


console.log('This is the JavaScript entry file - your code begins here.');



// create Data
let masterData = {
  currentUserId: 2,
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
  console.log(calculateUserSpending(findUsersTrips(masterData.currentUserId, masterData.trips), findUserTripDestinations(findUsersTrips(masterData.currentUserId, masterData.trips), masterData.destinations)))
  displayUserSpending(calculateUserSpending(findUsersTrips(masterData.currentUserId, masterData.trips), findUserTripDestinations(findUsersTrips(masterData.currentUserId, masterData.trips), masterData.destinations)))
  displayUserTrips(findUserTripDestinations(findUsersTrips(masterData.currentUserId, masterData.trips), masterData.destinations))
};