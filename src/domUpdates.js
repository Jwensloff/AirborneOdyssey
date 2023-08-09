import dayjs from "dayjs";
import { calculateTotalUserSpending, validateUserLogin } from "./functions";

// query selectors

// main
export const main = document.querySelector("main");
export const nav = document.querySelector("nav");
export const innerWrapper = document.querySelector('.inner-box');
// buttons
export const loginButton = document.querySelector(".login-button");
export const newTripButton = document.querySelector(".new-trip-button");
export const homeButton = document.querySelector(".home-button");
export const bookButton = document.querySelector(".book-button");
export const seeAllTripsButton = document.querySelector(
  ".see-all-trips-button"
);

// user input
export const inputError = document.querySelector(".input-error");
export const passwordElement = document.querySelector(".password-input");
export const userNameElement = document.querySelector(".username-input");

export const errorMessage = document.querySelector(".error-message");
export const startDateInput = document.getElementById("start-date-input");
export const endDateInput = document.getElementById("end-date-input");
export const numPeopleInput = document.querySelector(".num-traveler-input");
export const displayNumInputField =
  document.querySelectorAll(".select-num-people");

// update DOM

const mainNav = document.querySelector(".main-nav-wrapper");
const userName = document.querySelector(".user-name");
const userSpending = document.querySelector(".display-user-spending");
const pastUserTripGrid = document.querySelector(".past-user-trip-grid");
const upcomingUserTripGrid = document.querySelector(".upcoming-trip-grid");
const resetPlanTripInput = document.querySelectorAll(".reset");
const displayNewTripCost = document.querySelector(
  ".display-upcoming-trip-cost"
);
const loginItems = document.querySelectorAll(".login");
const dashboardItems = document.querySelectorAll(".dashboard");
const destinationSelectionItems = document.querySelector(".destinations");
const dashBoardPage = document.querySelectorAll(".dashboard");
const showUserTripPlanPage = document.querySelector(".user-plan-trip-page");
export const pickDestinationGrid = document.querySelector(".destinations-grid");
const confirmationPage = document.querySelectorAll(".confirmation-page");
const planUserTripPage = document.querySelector(".user-plan-trip-page");
const displayNewTripLocation = document.querySelector(
  ".display-new-trip-location"
);
const displayNewTripTotalCost = document.querySelector(
  ".display-new-trip-total-cost"
);
const displayNewTripImg = document.querySelector(".display-new-trip-image");
const noUpcomingTripsMessage = document.querySelector(
  ".no-upcoming-trip-message"
);

export const displayConfirmationPage = (
  newTripObject,
  newTripCost,
  allDestinations
) => {
  planUserTripPage.classList.add("hidden");
  confirmationPage.forEach((item) => item.classList.remove("hidden"));
  displayNewTripLocation.innerText = "";

  const newDestinaton = allDestinations.find(
    (destination) => destination.id === newTripObject.destinationID
  );

  const tripStartDate = dayjs(newTripObject.date);
  const tripEndDate = tripStartDate.add(newTripObject.duration, "day");
  displayNewTripLocation.innerText = `You're going to ${
    newDestinaton.destination
  } from ${tripStartDate.format("MM/DD/YYYY")} through ${tripEndDate.format(
    "MM/DD/YYYY"
  )}.`;
  displayNewTripTotalCost.innerText = "";
  displayNewTripTotalCost.innerText = `Total cost: $${newTripCost}`;

  displayNewTripImg.innerHTML = "";
  displayNewTripImg.innerHTML = `<img class='confirmation-page-image' 
   src='${newDestinaton.image}' alt='${newDestinaton.alt}'></img>`;
};

export const showMainPage = () => {
  loginItems.forEach((item) => item.classList.add("hidden"));
  dashboardItems.forEach((item) => item.classList.remove("hidden"));
  mainNav.classList.remove("hidden");
};

export const displayUserName = (currentUser) => {
  userName.innerText = "";
  userName.innerText = ` Welcome back ${currentUser.name}!`;
};

export const displayUserSpending = (calculatedTotalUserSpending) => {
  userSpending.innerText = "";
  userSpending.innerText = `You have spent a total of $${calculatedTotalUserSpending} on your travels!`;
};

export const renderMainPage = (allUserTrips, userTripDestinations) => {
  pastUserTripGrid.innerHTML = "";

  allUserTrips.pastTrips.forEach((trip) => {
    const currentTripDestination = userTripDestinations.find(
      (destination) => destination.id === trip.destinationID
    );

    const tripStartDate = dayjs(trip.date);
    const tripEndDate = tripStartDate.add(trip.duration, "day");

    pastUserTripGrid.innerHTML += `<article class='destination-card' id='${
      currentTripDestination.id
    }'>
      <img class='currentTripDestination-card img' src='${
        currentTripDestination.image
      }' alt='${currentTripDestination.alt}'>
      <div class="card-text-wrapper">
      <h2>${currentTripDestination.destination}</h2>
      <p>Status: Past</p>
      <p>Date: ${tripStartDate.format("YYYY/MM/DD")} - ${tripEndDate.format(
      "YYYY/MM/DD"
    )}</p>  </article>
    </div>`;
  });
  if (allUserTrips.upcomingTrips.length < 1) {
    noUpcomingTripsMessage.innerText =
      "You don't have any upcoming trips planned";
  } else {
    renderUpcomingTripsGrid(allUserTrips, userTripDestinations);
  }
  return userTripDestinations;
};

export const showChooseDestinationPage = (allDestinations) => {
  pickDestinationGrid.innerHTML = "";
  dashBoardPage.forEach((item) => item.classList.add("hidden"));
  destinationSelectionItems.classList.remove("hidden");
  let sortedDestinations = allDestinations.sort((a, b) =>
    a.destination.localeCompare(b.destination)
  );

  sortedDestinations.forEach((destination) => {
    if (destination.id !== 45) {
      pickDestinationGrid.innerHTML += `<article class='pick-destination-card' id='${destination.id}'>
  <img class='pick-destination-card img' src='${destination.image}' alt='${destination.alt}'>
  <div class="card-text-wrapper">
  
  <h2>${destination.destination}<i id='${destination.id}' class="fa-regular fa-square-check""></i></h2>
  <p> Lodging: $${destination.estimatedLodgingCostPerDay} per person</p>
  <p>Flight: $${destination.estimatedFlightCostPerPerson} per person</p>
  </article></div>`;
    }
  });
};

export const backToMainPage = () => {
  destinationSelectionItems.classList.add("hidden");
  dashboardItems.forEach((item) => item.classList.remove("hidden"));
  showUserTripPlanPage.classList.add("hidden");
  resetPlanTripInput.forEach((item) => item.classList.add("hidden"));
  confirmationPage.forEach((item) => item.classList.add("hidden"));
  displayNumInputField.forEach((item) => item.classList.add("hidden"));
  numPeopleInput.value = "";
  inputError.innerText = "";
  startDateInput.value = "yyyy/mm/dd";
  endDateInput.value = "yyyy/mm/dd";
};

export const captureDestinationID = (masterData, event) => {
  let newTripObject = {
    userID: parseInt(masterData.currentUser.id),
    destinationID: parseInt(event.target.closest("i").id),
    status: "pending",
  };
  return newTripObject;
};

export const displaySelectDateForTrip = () => {
  destinationSelectionItems.classList.add("hidden");
  showUserTripPlanPage.classList.remove("hidden");
};

export function setupDateInputs() {
  const today = dayjs().format("YYYY-MM-DD");
  startDateInput.min = today;
  startDateInput.addEventListener("change", function () {
    const selectedStartDate = startDateInput.value;

    endDateInput.min = selectedStartDate;
    
  });
};

const numPeipleInputWreapper = document.querySelector(
  ".select-num-people-wrapper"
);
export const displaySelectNumPeople = () => {
  inputError.innerText = "";
  displayNumInputField.forEach((item) => item.classList.remove("hidden"));
  numPeipleInputWreapper.classList.remove("hidden");
};

export const displayBookItButton = () => {
  bookButton.classList.remove("hidden");
};

export const displayUpcomingTrips = (allUserTrips, userTripDestinations) => {
  pastUserTripGrid.innerHTML = "";

  allUserTrips.pastTrips.forEach((trip) => {
    const currentTripDestination = userTripDestinations.find(
      (destination) => destination.id === trip.destinationID
    );

    const tripStartDate = dayjs(trip.date);
    const tripEndDate = tripStartDate.add(trip.duration, "day");

    pastUserTripGrid.innerHTML += `<article class='destination-card' id='${
      currentTripDestination.id
    }'>
      <img class='currentTripDestination-card img' src='${
        currentTripDestination.image
      }' alt='${currentTripDestination.alt}'>
      <h2>${currentTripDestination.destination}</h2>
      <h2>Date: ${tripStartDate.format("YYYY/MM/DD")} - ${tripEndDate.format(
      "YYYY/MM/DD"
    )}</h2> </article>`;
  });
};

const renderUpcomingTripsGrid = (allUserTrips, userTripDestinations) => {
  upcomingUserTripGrid.innerHTML = "";

  allUserTrips.upcomingTrips.forEach((trip) => {
    const upcomingTripDestination = userTripDestinations.find(
      (destination) => destination.id === trip.destinationID
    );
    const tripStartDate = dayjs(trip.date);
    const tripEndDate = tripStartDate.add(trip.duration, "day");

    upcomingUserTripGrid.innerHTML += `<article class='destination-card' id='${
      upcomingTripDestination.id
    }'>
    <img class='upcomingTripDestination-card img' src='${
      upcomingTripDestination.image
    }' alt='${upcomingTripDestination.alt}'>
    <div class="card-text-wrapper">
    <h2>${upcomingTripDestination.destination}</h2>
    <p>Status: Pending</p>
    <p>Date: ${tripStartDate.format("YYYY/MM/DD")} - ${tripEndDate.format(
      "YYYY/MM/DD"
    )}</p>  <div/>
    </article>`;
  });
};

export const displayUserSpendingForThisYear = (
  allUserTrips,
  findUserTripDestinations
) => {
  displayNewTripCost.innerText = "";

  if (allUserTrips.upcomingTrips.length === 0) {
    displayNewTripCost.innerText = `You have spent $0 on trips this year`;
  } else {
    const spendingOnTripsThisYear = calculateTotalUserSpending(
      allUserTrips.upcomingTrips,
      findUserTripDestinations
    );
    displayNewTripCost.innerText = `You have spent $${spendingOnTripsThisYear} on trips this year`;
  }
};

export const checkUserNamePassword = (username, password) => {
  if (username === "" && password == "") {
    errorMessage.innerText = "";
    errorMessage.innerText = "Please login to continue";
    return false;
  }
  if (username === "") {
    errorMessage.innerText = "";
    errorMessage.innerText = "Please enter your username";
    return false;
  }
  if (!validateUserLogin(username)) {
    errorMessage.innerText = "";
    errorMessage.innerText = "The username or password you entered was incorrect";
    return false;
  }
  if (password === "") {
    errorMessage.innerText = "";
    errorMessage.innerText = "Please enter your password";
    return false;
  }
  if (password !== `travel`) {
    errorMessage.innerText = "";
    errorMessage.innerText =
      "The username or password you entered was incorrect";
    return false;
  }
};

export const checkUserTripInput = () => {
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const numTravelers = Number(numPeopleInput.value);

  if (!startDate || !endDate) {
    inputError.innerText = "";
    inputError.innerText = "Please enter a valid date to continue";
    bookButton.classList.add("hidden");

    return false;
  }
  if (!numTravelers || numTravelers === 0 || numTravelers < 0) {
    inputError.innerText = "";
    inputError.innerText =
      "Please specify the number of travelers there will be to continue";
    bookButton.classList.add("hidden");

    return false;
  }
  inputError.innerText = "";
};
