import dayjs from "dayjs";
// import { newTripObject } from './scripts'
export let newTripObject;

export const getCurrentUserInformation = (travelerID, travelersArray) => {
  let traveler = travelersArray.find((traveler) => traveler.id === travelerID);
  if(!traveler){
    return 'The traveler id you entered does not match our records.'
  } else {
    return traveler;
  }
};

export const findUsersTrips = (travelerID, tripsArray) => {
  const userTrips = tripsArray.filter((trip) => trip.userID === travelerID);
  console.log('userTrips',userTrips)

  if(!userTrips || userTrips.length === 0){
    return 'The traveler id you entered does not match our records.'
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
  // console.log('allUserTrips from functions file',allUserTrips)
  return allUserTrips;
};

export const findUserTripDestinations = (findUserTrips, destinations) => {
  // console.log('userTrips', findUserTrips)
  const userDestinations = findUserTrips.reduce((destinationArray, trip) => {
    destinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        destinationArray.push(destination);
      }
    });
    return destinationArray;
  }, []);
  // console.log(userDestinations)
  return userDestinations;
};

export const calculateTotalUserSpending = (findUsersTrips, findUserTripDestinations) => {

  const spending = findUsersTrips.reduce((sum, trip) => {
    const numTravelers = trip.travelers;
    const duration = trip.duration;
    const travelDays = duration * numTravelers;
    // console.log('numTravelers',numTravelers)

    let flightCost;
    findUserTripDestinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        flightCost = destination.estimatedFlightCostPerPerson;
      }
    });
    // let roundTrip = flightCost
    
    let costPerDay;
    
    findUserTripDestinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        costPerDay = destination.estimatedLodgingCostPerDay;
      }
    });
    const totalLodgingCost = costPerDay * travelDays;
    
    sum += flightCost + totalLodgingCost;
    return sum;
  }, 0);

  const totalCostWithTravelAgentFees = spending + (spending * 0.1);
  return totalCostWithTravelAgentFees;
};

export const calculateNewTripCost = (allDestinations) => {
 console.log(newTripObject)
  const newDestinaton = allDestinations.find(destination => destination.id === newTripObject.destinationID)
  console.log('new destination',newDestinaton)
  const lodgingCostPerDay = newDestinaton.estimatedLodgingCostPerDay * newTripObject.travelers
  console.log(lodgingCostPerDay)
  const totalCostOfLodging = lodgingCostPerDay * newTripObject.duration

  const totalCostOfFlights = newDestinaton.estimatedFlightCostPerPerson * newTripObject.travelers
  
  const newTripCost = totalCostOfFlights + totalCostOfLodging 
  const travelersAgentFee = (newTripCost + 0.1*newTripCost)
  const totalNewTripCost = newTripCost + travelersAgentFee
  return totalNewTripCost
}


