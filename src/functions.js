export const getCurrentUserInformation = (travelerID, travelersArray) => {
  let traveler = travelersArray.find((traveler) => traveler.id === travelerID);
  return traveler;
};

export const findUsersTrips = (travelerID, tripsArray) => {
  const userTrips = tripsArray.filter(trip => trip.userID === travelerID)
  return userTrips
}

export const findUserTripDestinations = (findUserTrips, destinations) => {
  // console.log('userTrips', findUserTrips)
  const userDestinations = findUserTrips.reduce((destinationArray, trip) => {
    destinations.forEach(destination => {
      if(destination.id === trip.destinationID){
      destinationArray.push(destination)
    }
  });
    return destinationArray;
  },[]);
// console.log(userDestinations)
return userDestinations
}

export const calculateUserSpending = (findUsersTrips, findUserTripDestinations) => {
  const spending = findUsersTrips.reduce((sum, trip) => {
    const numTravelers = trip.travelers;
    const duration = trip.duration;
    const travelDays = duration * numTravelers;

    let oneWayTicket = 0;
    findUserTripDestinations.forEach(destination => {
      if(destination.id === trip.destinationID){
        oneWayTicket = destination.estimatedFlightCostPerPerson
      }
    });
    let roundTrip = oneWayTicket * 2;
    // console.log(oneWayTicket)
    
    let costPerDay = 0
    findUserTripDestinations.forEach(destination => {
      if(destination.id === trip.destinationID){
        costPerDay = destination.estimatedLodgingCostPerDay;
      }
    })
    
    const totalLodgingCost = costPerDay*travelDays;

    sum = roundTrip + totalLodgingCost;
    return sum;
  }, 0);

 const totalCostWithTravelAgentFees = spending + (spending * .10);
 return totalCostWithTravelAgentFees;
};