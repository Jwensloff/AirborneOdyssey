import dayjs from "dayjs";

export const getCurrentUserInformation = (travelerID, travelersArray) => {
  let traveler = travelersArray.find((traveler) => traveler.id === travelerID);
  if (!traveler) {
    return "The traveler id you entered does not match our records.";
  } else {
    return traveler;
  }
};

export const findUsersTrips = (travelerID, tripsArray) => {
  const userTrips = tripsArray.filter((trip) => trip.userID === travelerID);
  if (!userTrips || userTrips.length === 0) {
    return "The traveler id you entered does not match our records.";
  } else {
    return userTrips;
  }
};

export const filterUserTripsByDate = (userTrips) => {
  let allUserTrips = {
    pastTrips: [],
    upcomingTrips: [],
  };
  userTrips.forEach((trip) => {
    const today = dayjs().format("YYYY/MM/DD");
    const parsedCurrentDate = dayjs(today);
    const parsedTripDate = dayjs(trip.date);

    if (parsedTripDate.isBefore(parsedCurrentDate)) {
      allUserTrips.pastTrips.push(trip);
    } else {
      allUserTrips.upcomingTrips.push(trip);
    }
  });
  return allUserTrips;
};

export const findUserTripDestinations = (findUserTrips, destinations) => {
  const userDestinations = findUserTrips.reduce((destinationArray, trip) => {
    destinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        destinationArray.push(destination);
      }
    });
    return destinationArray;
  }, []);
  return userDestinations;
};

export const calculateTotalUserSpending = (
  findUsersTrips,
  findUserTripDestinations
) => {
  const spending = findUsersTrips.reduce((sum, trip) => {
    const numTravelers = trip.travelers;
    const duration = trip.duration;
    const travelDays = duration * numTravelers;

    let flightCost;
    findUserTripDestinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        flightCost = destination.estimatedFlightCostPerPerson;
      }
    });

    let costPerDay;

    findUserTripDestinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        costPerDay = destination.estimatedLodgingCostPerDay;
      }
    });
    const totalLodgingCost = costPerDay * travelDays;
    const totalFlightCost = flightCost * numTravelers;
    sum += totalFlightCost + totalLodgingCost;
    return sum;
  }, 0);

  const totalCostWithTravelAgentFees = spending + spending * 0.1;
  return totalCostWithTravelAgentFees;
};

export const calculateNewTripCost = (allDestinations, newTripObject) => {
  const newDestinaton = allDestinations.find(
    (destination) => destination.id === newTripObject.destinationID
  );
  const lodgingCostPerDay =
    newDestinaton.estimatedLodgingCostPerDay * newTripObject.travelers;
  const totalCostOfLodging = lodgingCostPerDay * newTripObject.duration;
  const totalCostOfFlights =
    newDestinaton.estimatedFlightCostPerPerson * newTripObject.travelers;
  const newTripCost = totalCostOfFlights + totalCostOfLodging;

  const travelersAgentFee = newTripCost * 0.1;
  const totalNewTripCost = newTripCost + travelersAgentFee;
  return totalNewTripCost;
};

export const validateUserLogin = (username) => {

  const idBasedOnLogin = username.slice(8);
  const login = username.slice(0, 8);
  const id = Number(idBasedOnLogin);

  if (idBasedOnLogin < 1 || idBasedOnLogin > 50) {
    return false;
  }

  if (login !== "traveler") {
    return false;
  }

  if (!Number.isInteger(id)) {
    return false;
  }
  if(username !== login+id) {
    return false;
  }
  return true;
};
