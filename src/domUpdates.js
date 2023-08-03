import dayjs from "dayjs";

// query selectors
const userName = document.querySelector(".user-name");
const userSpending = document.querySelector(".display-user-spending");
const userTripGrid = document.querySelector(".user-trip-grid");
export const loginButton = document.querySelector(".login-button");
const loginItems = document.querySelectorAll(".login");
const dashboardItems = document.querySelectorAll(".dashboard");
const destinationSelectionItems = document.querySelector(".destinations");
const destinationsGrid = document.querySelector(".destinations-grid");
export const newTripButton = document.querySelector(".new-trip-button");
// console.log('loginItems', loginItems)
// console.log('dashboardItems',dashboardItems)
const dashBoardPage = document.querySelector(".dashboard-page");

export const showMainPage = () => {
  loginItems.forEach((item) => item.classList.add("hidden"));
  dashboardItems.forEach((item) => item.classList.remove("hidden"));
};

export const displayUserName = (currentUser) => {
  userName.innerText = "";
  userName.innerText = currentUser.name;
};

export const displayUserSpending = (calculatedTotalUserSpending) => {
  userSpending.innerText = "";
  userSpending.innerText = `You have spent a total of $${calculatedTotalUserSpending} on your travels!`;
};

export const displayUserTrips = (userTrips, userTripDestinations) => {
  userTripGrid.innerHTML = "";

  userTripDestinations.forEach((destination) => {
    const currentTrip = userTrips.find(
      (trip) => trip.destinationID === destination.id
    );
    const tripStartDate = dayjs(currentTrip.date);
    const tripEndDate = tripStartDate.add(currentTrip.duration, "day");

    userTripGrid.innerHTML += `<article class='destination-card' id='${
      destination.id
    }'>
      <img class='destination-card img' src='${destination.image}' alt='${
      destination.alt
    }'>
      <h2>${destination.destination}</h2>
      <h2>Date: ${tripStartDate.format("YYYY/MM/DD")} - ${tripEndDate.format(
      "YYYY/MM/DD"
    )}</h2>`;
  });

  return userTripDestinations;
};

export const showChooseDestinationPage = (allDestinations) => {
  dashBoardPage.classList.add("hidden");

  allDestinations.forEach((destination) => {
    if (destination.id !== 45) {
      console.log(destination.id)
      destinationsGrid.innerHTML += `<article class='destination-card' id='${destination.id}'>
  <img class='destination-card img' src='${destination.image}' alt='${destination.alt}'>
  <h2>${destination.destination}</h2>
  <h2> Daily lodging: $ ${destination.estimatedLodgingCostPerDay}/person</h2>
  <h2>Round trip Flight $ ${destination.estimatedFlightCostPerPerson}/person</h2>`;
    }
  });

  destinationSelectionItems.classList.remove("hidden");

};
