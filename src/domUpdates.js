import dayjs from "dayjs";
 
// query selectors

// buttons 
export const loginButton = document.querySelector(".login-button");
export const newTripButton = document.querySelector(".new-trip-button");
export const homeButton = document.querySelector('.home-button');
export const bookButton = document.querySelector('.book-button');

// user input 
export const startDateInput = document.getElementById("start-date-input");
export const endDateInput = document.getElementById("end-date-input");
export const numPeopleInput = document.getElementById('number-input');
export const displayNumInputField = document.querySelectorAll('.select-num-people');

// update DOM
const userName = document.querySelector(".user-name");
const userSpending = document.querySelector(".display-user-spending");
const userTripGrid = document.querySelector(".user-trip-grid");
const loginItems = document.querySelectorAll(".login");
const dashboardItems = document.querySelectorAll(".dashboard");
const destinationSelectionItems = document.querySelector(".destinations");
const destinationsGrid = document.querySelector(".destinations-grid");
const dashBoardPage = document.querySelector(".dashboard-page");
const showUserTripPlanPage = document.querySelector('.user-plan-trip-page');
export const pickDestinationGrid = document.querySelector('.destinations-grid');



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

  userTrips.forEach(trip => {
    const currentTripDestination = userTripDestinations
    .find(destination => destination.id === trip.destinationID)
  
    const tripStartDate = dayjs(trip.date);
    const tripEndDate = tripStartDate.add(trip.duration, "day");

    userTripGrid.innerHTML += `<article class='destination-card' id='${
      currentTripDestination.id
    }'>
      <img class='currentTripDestination-card img' src='${currentTripDestination.image}' alt='${
      currentTripDestination.alt
    }'>
      <h2>${currentTripDestination.destination}</h2>
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
      // console.log(destination.id)
      destinationsGrid.innerHTML += `<article class='pick-destination-card' id='${destination.id}'>
  <img class='pick-destination-card img' src='${destination.image}' alt='${destination.alt}'>
  <h2>${destination.destination}</h2>
  <h3> Daily lodging: $ ${destination.estimatedLodgingCostPerDay}/person</h2>
  <h3>Round trip Flight $ ${destination.estimatedFlightCostPerPerson}/person</h2>
  <button id='${destination.id}'>Take me here</button>`;
    }
  });
  destinationSelectionItems.classList.remove("hidden");
};

export const backToMainPage = () => {
  destinationSelectionItems.classList.add("hidden");
  dashboardItems.forEach((item) => item.classList.remove("hidden"));
  showUserTripPlanPage.classList.add('hidden');

}

export const captureDestinationID = (masterData, event) => {
   let newTripObject = {
        userID: parseInt(masterData.currentUser.id), 
        destinationID: parseInt(event.target.closest('button').id), 
        status: 'pending', 
    }
    return newTripObject
}

export const displaySelectDateForTrip = () => {
  destinationSelectionItems.classList.add("hidden");
  showUserTripPlanPage.classList.remove('hidden');
}

export const displayAllowUserToSelectNumDays = () => {
  
}

// Function to set up the date inputs
export function setupDateInputs() {

  // Get the current date in the format "YYYY-MM-DD"
  const today = dayjs().format("YYYY-MM-DD");

  // Set the value and min attributes of the date inputs to today's date
  startDateInput.value = today;
  startDateInput.min = today;
  endDateInput.value = today;
  endDateInput.min = today;

  // Add event listener to start date input
  startDateInput.addEventListener("change", function () {
    // Get the selected start date
    const selectedStartDate = startDateInput.value;

    // Set the minimum date of end date input to the selected start date
    endDateInput.min = selectedStartDate;

    // Check if the current selected end date is before the selected start date
    if (endDateInput.value < selectedStartDate) {
      // If it is, reset the end date to the selected start date
      endDateInput.value = selectedStartDate;
    }
  });
}

export const displaySelectNumPeople = () => {
  displayNumInputField.forEach(item => item.classList.remove('hidden'));
}

export const displayBookItButton = () => {
  bookButton.classList.remove('hidden');

}