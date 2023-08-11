const allTravelersURL = "https://airborne-odyssey-fc6kohqgk-jwensloff.vercel.app/api/v1/travelers";
const allTripsURL = "https://airborne-odyssey-fc6kohqgk-jwensloff.vercel.app/api/v1/trips";
const allDestinations = "https://airborne-odyssey-fc6kohqgk-jwensloff.vercel.app/api/v1/destinations";

const urlArray = [allTravelersURL, allTripsURL, allDestinations];

import { validateUserLogin } from "./functions";

export let masterData = {
  today: dayjs().format("YYYY/MM/DD"),
};

// GET requests
export const createFetchRequests = () => {
  return urlArray.map((url) =>
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .catch((error) => console.log("Error", error))
  );
};

export const postUserTrip = (newTripObject) => {
  console.log("from apiCalls file", newTripObject);
  let newID = masterData.trips.length + 1;

  let data = {
    id: newID,
    userID: newTripObject.userID,
    destinationID: newTripObject.destinationID,
    travelers: newTripObject.travelers,
    date: newTripObject.date,
    duration: newTripObject.duration,
    status: "pending",
    suggestedActivities: [],
  };

  return fetch(allTripsURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
