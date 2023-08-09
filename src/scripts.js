const dayjs = require("dayjs");
import "./css/styles.css";

import "./images/turing-logo.png";

import { createFetchRequests, postUserTrip, masterData } from "./apiCalls";

import {
  findUsersTrips,
  getCurrentUserInformation,
  findUserTripDestinations,
  calculateTotalUserSpending,
  filterUserTripsByDate,
  calculateNewTripCost,
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
  nav,
  checkUserNamePassword,
  checkUserTripInput,
  userNameElement,
  passwordElement,
  innerWrapper,
} from "./domUpdates";

let newTripObject;

// create Data
window.addEventListener("load", () => {
  Promise.all(createFetchRequests()).then((promiseArray) => {
    masterData.travelers = promiseArray[0].travelers;
    masterData.trips = promiseArray[1].trips;
    masterData.destinations = promiseArray[2].destinations;
  });
});

const generateWebPage = () => {
  masterData.currentUser = getCurrentUserInformation(
    masterData.currentUserId,
    masterData.travelers
  );
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
  let username = userNameElement.value;
  let id = Number(username.slice(8));
  masterData.currentUserId = id;
  let password = passwordElement.value;
  let checkLogin = checkUserNamePassword(username, password);
  if (checkLogin === false) {
    return;
  } else {
    generateWebPage();
    showMainPage();
    innerWrapper.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    main.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
    nav.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
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
  displaySelectNumPeople();
  return newTripObject;
});

numPeopleInput.addEventListener("change", (event) => {
  const numPeople = parseInt(event.target.value);
  newTripObject.travelers = numPeople;
  if (checkUserTripInput() === false) {
    return;
  } else {
    displayBookItButton();
  }
});

numPeopleInput.addEventListener("keyup", (event) => {
  const numPeople = parseInt(event.target.value);
  newTripObject.travelers = numPeople;
  if (checkUserTripInput() === false) {
    return;
  } else {
    displayBookItButton();
  }
});

bookButton.addEventListener("click", () => {
  postUserTrip(newTripObject)
    .then(() => {
      return fetch("http://localhost:3001/api/v1/trips");
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      masterData.trips = data.trips;
      const userTrips = findUsersTrips(
        masterData.currentUserId,
        masterData.trips
      );
      const userTripsByDate = filterUserTripsByDate(userTrips);
      displayConfirmationPage(
        newTripObject,
        calculateNewTripCost(masterData.destinations, newTripObject),
        masterData.destinations
      );
    })
    .catch((error) => console.log("Error", error));

  displaySelectNumPeople();
  bookButton.classList.add("hidden");
});

seeAllTripsButton.addEventListener("click", () => {
  backToMainPage();
  generateWebPage();
  numPeopleInput.value = "";
});
