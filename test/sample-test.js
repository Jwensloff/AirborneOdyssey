import chai from 'chai';
const expect = chai.expect;

import {
  findUsersTrips,
  getCurrentUserInformation,
  findUserTripDestinations,
  calculateTotalUserSpending,
  filterUserTripsByDate,
  calculateNewTripCost,
  validateUserLogin,
} from "../src/functions";

describe('User trips', () => {
let travelers;
let trips;
let user1Trips;
let user2Trips;
let user4trips;
  beforeEach(() => {
     travelers = [
      {name: 'Dusty', id:1},
      {name: 'Matt', id:2},
      {name: 'Jocelyn', id:3},
      {name: 'Alex', id:4},

    ];
    trips = [
      {id: 1, userID:1, date: '2000/05/01', duration: 2},
      {id: 2, userID:2, date: '2099/08/11', duration: 3},
      {id: 3, userID:2, date: '2020/02/12', duration: 1},
      {id: 4, userID:3, date: '2023/06/04', duration: 9},
    ];
  user1Trips = findUsersTrips(1, trips);
  user2Trips = findUsersTrips(2, trips);
  user4trips = findUsersTrips(4, trips);
  }); 

  it('should return an object', () => {
    expect(getCurrentUserInformation(1, travelers)).to.be.an('object')
  })

  it('Should return the correct traveler based on the current user id', () => {
    expect(getCurrentUserInformation(1, travelers)).to.deep.equal({name: 'Dusty', id:1});
  });

  it('Should return a different traveler based on a different user id', () => {
    expect(getCurrentUserInformation(3, travelers)).to.deep.equal({name: 'Jocelyn', id:3})
  });

  it('should return a string', () => {
    expect(getCurrentUserInformation(5, travelers)).to.be.a('string')
  });

  it('Should return a string if the traveler is not found', () => {
    expect(getCurrentUserInformation(5, travelers)).to.deep.equal('The traveler id you entered does not match our records.')
  });
 
  it('should return an array', () => {
    expect(findUsersTrips(1, trips)).to.be.an('array')
  })

  it('Should return an array of trips the traveler went on', () => {
    expect(findUsersTrips(1, trips)).to.deep.equal([{id: 1, userID:1, date: '2000/05/01', duration: 2}]);
  });

  it('Should return a different array of trips for a different traveler', () => {
    expect(findUsersTrips(2, trips)).to.deep.equal(
      [{id: 2, userID:2, date: '2099/08/11', duration: 3},
       {id: 3, userID:2, date: '2020/02/12', duration: 1}]);
  });

  it('should return a string', () => {
    expect(findUsersTrips(9, trips)).to.be.a('string')
  });

  it('Should return a string if there aren\'t any trips that match the id', () => {
    expect(findUsersTrips(9, trips)).to.deep.equal('The traveler id you entered does not match our records.');
  });

  it('should return an object', () => {
    expect(filterUserTripsByDate(user1Trips)).to.be.an('object')
  });

  it('Should return an object of user trips filtered by date', () => {
    expect(filterUserTripsByDate(user1Trips)).to.deep.equal(
      {
        pastTrips: [{id: 1, userID:1, date: '2000/05/01', duration: 2}],
        upcomingTrips: [],
      });
  });

  it('Should return an object of user trips for a different traveler', () => {
    expect(filterUserTripsByDate(user2Trips)).to.deep.equal(
      {
        pastTrips: [{id: 3, userID:2, date: '2020/02/12', duration: 1}],
        upcomingTrips: [{id: 2, userID:2, date: '2099/08/11', duration: 3}],
      });
    });
});

describe('Destination', () => {
  
  let destinations;
  let travelers;
  let trips;
  let user1Trips;
  let user2Trips;

  beforeEach(() => {
    travelers = [
      { name: "Dusty", id: 1 },
      { name: "Matt", id: 2 },
      { name: "Jocelyn", id: 3 },
      { name: "Alex", id: 4 },
    ];

    trips = [
      {
        id: 1,
        userID: 1,
        destinationID: 1,
        date: "2000/05/01",
        duration: 2,
      },
      {
        id: 2,
        userID: 2,
        destinationID: 2,
        date: "2099/08/11",
        duration: 3,
      },
      {
        id: 3,
        userID: 2,
        destinationID:3, 
        date: "2020/02/12",
        duration: 1,
      },
      {
        id: 4,
        userID: 3,
        destinationID: 1,
        date: "2023/06/04",
        duration: 9,
      },
    ];
    
    destinations = [
      {
        id: 1,
        destination: "Sydney, Austrailia",
        estimatedLodgingCostPerDay: 130,
        estimatedFlightCostPerPerson: 950
      },
      {
        id: 2,
        destination: "Cartagena, Colombia",
        estimatedLodgingCostPerDay: 65,
        estimatedFlightCostPerPerson: 350
      },
      {
        id: 3,
        destination: "Madrid, Spain",
        estimatedLodgingCostPerDay: 150,
        estimatedFlightCostPerPerson: 650,
        },
    ];
    user1Trips = findUsersTrips(1, trips);
    user2Trips = findUsersTrips(2, trips);
  });
  
  it('should return an array', () => {
    expect(findUserTripDestinations(user1Trips, destinations)).to.be.an('array')
  })

  it('return an array of destinations associated with the traveler', () => {
    expect(findUserTripDestinations(user1Trips, destinations)).to.deep.equal
    ([{
      id: 1,
      destination: "Sydney, Austrailia",
      estimatedLodgingCostPerDay: 130,
      estimatedFlightCostPerPerson: 950,
     }])

  });

  it('return a different array of destinations associated with a different traveler', () => {
    expect(findUserTripDestinations(user2Trips, destinations)).to.deep.equal
    ([ {
      id: 2,
      destination: "Cartagena, Colombia",
      estimatedLodgingCostPerDay: 65,
      estimatedFlightCostPerPerson: 350
    },
    {
      id: 3,
      destination: "Madrid, Spain",
      estimatedLodgingCostPerDay: 150,
      estimatedFlightCostPerPerson: 650,
      },])
  });
});

describe('Trip cost', () => {
  
  let destinations;
  let trips;
  let user1Trips;
  let user2Trips;
  let user1Destinations;
  let user2Destinations;
  beforeEach(() => {
    trips = [
      {
        id: 1,
        userID: 1,
        destinationID: 1,
        travelers: 3,
        date: "2000/05/01",
        duration: 2,
      },
      {
        id: 2,
        userID: 2,
        destinationID: 2,
        travelers: 8,
        date: "2099/08/11",
        duration: 3,
      },
      {
        id: 3,
        userID: 2,
        destinationID:3, 
        travelers: 1,
        date: "2020/02/12",
        duration: 1,
      },
      {
        id: 4,
        userID: 3,
        destinationID: 1,
        travelers: 3,
        date: "2023/06/04",
        duration: 9,
      },
    ];
    
    destinations = [
      {
        id: 1,
        destination: "Sydney, Austrailia",
        estimatedLodgingCostPerDay: 130,
        estimatedFlightCostPerPerson: 950
      },
      {
        id: 2,
        destination: "Cartagena, Colombia",
        estimatedLodgingCostPerDay: 65,
        estimatedFlightCostPerPerson: 350
      },
      {
        id: 3,
        destination: "Madrid, Spain",
        estimatedLodgingCostPerDay: 150,
        estimatedFlightCostPerPerson: 650,
        },
    ];
    user1Trips = findUsersTrips(1, trips);
    user2Trips = findUsersTrips(2, trips);
    user1Destinations = findUserTripDestinations(user1Trips, destinations);
    user2Destinations = findUserTripDestinations(user2Trips, destinations);
  });
  
  it('should return a number', () => {
    expect(calculateTotalUserSpending(user1Trips, user1Destinations)).to.be.an('number')
  });

  it('should calculate the cost of all the user trips', () => {
    expect(calculateTotalUserSpending(user1Trips, user1Destinations)).to.equal(3993)
  })

  it('should calculate the cost of all trips for a different user', () => {
    expect(calculateTotalUserSpending(user2Trips, user2Destinations)).to.equal(5676)
  })

  it('should return a number', () => {
    const newTripObject = {
      date: '2055/11/15',
      destinationID: 2,
      duration: 5,
      travelers: 7,
      userID: 1,
    };
    expect(calculateNewTripCost(destinations, newTripObject)).to.be.an('number')
  });

  it('should calculate the cost of a new trip', () => {
    const newTripObject = {
      date: '2055/11/15',
      destinationID: 2,
      duration: 5,
      travelers: 7,
      userID: 1,
    };
  expect(calculateNewTripCost(destinations, newTripObject)).to.equal(5197.5)
  });

  it('should calculate the cost of a new trip for a different user', () => {
    const newTripObject = {
      date: '2049/11/15',
      destinationID: 3,
      duration: 8,
      travelers: 2,
      userID: 2,
    };
  expect(calculateNewTripCost(destinations, newTripObject)).to.equal(4070)
  });

  it('should calculate to 0', () => {
    const newTripObject = {
      date: '2049/11/15',
      destinationID: 3,
      duration: 6,
      travelers: 0,
      userID: 3,
    };
  expect(calculateNewTripCost(destinations, newTripObject)).to.equal(0)
  });
});

describe('Check login', () => {
  
  it('should return true' , () => {
    const username = 'traveler6';
    expect(validateUserLogin(username)).to.equal(true)
  });

  it('should return true' , () => {
    const username = 'traveler62'
    expect(validateUserLogin(username)).to.equal(false)
  })

})
