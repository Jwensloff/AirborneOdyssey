// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
const dayjs = require("dayjs");
// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";

import { createFetchRequests, postUserTrip, masterData } from "./apiCalls";

import {
  findUsersTrips,
  getCurrentUserInformation,
  findUserTripDestinations,
  calculateTotalUserSpending,
  filterUserTripsByDate,
  calculateNewTripCost,
  newTripObject,
} from "./functions";

import {
  displayUserName,
  displayUserSpending,
  renderMainPage,
  showMainPage,
  loginButton,
  newTripButton,
  homeButton,
  showChooseDestinationPage,
  backToMainPage,
  pickDestinationGrid,
  captureDestinationID,
  displaySelectDateForTrip,
  startDateInput,
  endDateInput,
  setupDateInputs,
  displaySelectNumPeople,
  numPeopleInput,
  displayBookItButton,
  bookButton,
  displayConfirmationPage,
  seeAllTripsButton,
  displayUserSpendingForThisYear,
  main,
  checkUserNamePassword,
  checkUserTripInput,
} from "./domUpdates";

// create Data

window.addEventListener("load", () => {
  Promise.all(createFetchRequests()).then((promiseArray) => {
    masterData.travelers = promiseArray[0].travelers;
    masterData.trips = promiseArray[1].trips;
    masterData.destinations = promiseArray[2].destinations;
    generateWebPage();
  });
});

const generateWebPage = () => {
  masterData.currentUser = getCurrentUserInformation(
    masterData.currentUserId,
    masterData.travelers
  );
  console.log("masterData", masterData.currentUser);

  const userTrips = findUsersTrips(masterData.currentUserId, masterData.trips);
  const userTripsByDate = filterUserTripsByDate(userTrips);
  const userTripDestinations = findUserTripDestinations(
    userTrips,
    masterData.destinations
  );

  displayUserName(masterData.currentUser);
  displayUserSpending(
    calculateTotalUserSpending(userTrips, userTripDestinations)
  );
  displayUserSpendingForThisYear(userTripsByDate, userTripDestinations);
  renderMainPage(userTripsByDate, userTripDestinations);
};

// event listeners
loginButton.addEventListener("click", () => {
  let checkLogin = checkUserNamePassword(masterData.currentUser);
  if (checkLogin === false) {
  return;
  } else {
  showMainPage();
  main.style.backgroundColor = "rgb(224, 218, 209)";
  main.style.boxShadow = "0px 0px 9px 10px rgba(224, 218, 209)";
  }
});

newTripButton.addEventListener("click", () => {
  showChooseDestinationPage(masterData.destinations);
});

homeButton.addEventListener("click", () => {
  backToMainPage();
  generateWebPage();
});

pickDestinationGrid.addEventListener("click", (event) => {
  newTripObject = captureDestinationID(masterData, event);
  console.log(newTripObject);
  displaySelectDateForTrip();
  setupDateInputs();
  return newTripObject;
});

startDateInput.addEventListener("change", (event) => {
  const selectedDate = event.target.value;
  let formattedDate = dayjs(selectedDate);
  newTripObject.date = formattedDate.format("YYYY/MM/DD");
  return newTripObject;
});

endDateInput.addEventListener("change", (event) => {
  const selectedEndDate = event.target.value;
  let formattedEndDate = dayjs(selectedEndDate);
  let difference = formattedEndDate.diff(dayjs(newTripObject.date), "day");
  newTripObject.duration = parseInt(difference);
  console.log(newTripObject);
  displaySelectNumPeople();
  return newTripObject;
});

numPeopleInput.addEventListener("change", (event) => {
  const numPeople = parseInt(event.target.value);
  newTripObject.travelers = numPeople;
  console.log(newTripObject);
  if (checkUserTripInput() === false) {
    return;
  } else {
    displayBookItButton();
  }
});

numPeopleInput.addEventListener("keyup", (event) => {
  const numPeople = parseInt(event.target.value);
  newTripObject.travelers = numPeople;
  console.log(newTripObject);
  if (checkUserTripInput() === false) {
    return;
  } else {
    displayBookItButton();
  }
});

bookButton.addEventListener("click", () => {
  postUserTrip()
    .then(() => {
      return fetch("http://localhost:3001/api/v1/trips");
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network resposne was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      // console.log("all trips", data);
      masterData.trips = data.trips;
      const userTrips = findUsersTrips(
        masterData.currentUserId,
        masterData.trips
      );
      const userTripsByDate = filterUserTripsByDate(userTrips);
      displayConfirmationPage(
        newTripObject,
        calculateNewTripCost(masterData.destinations),
        masterData.destinations
      );
    })
    .catch((error) => console.log('Error', error));

  displaySelectNumPeople();
  bookButton.classList.add("hidden");
});

seeAllTripsButton.addEventListener("click", () => {
  backToMainPage();
  generateWebPage();
  numPeopleInput.value = "";
});
