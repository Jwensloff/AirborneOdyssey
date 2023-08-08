import chai from 'chai';
const expect = chai.expect;

import {
  findUsersTrips,
  getCurrentUserInformation,
  findUserTripDestinations,
  calculateTotalUserSpending,
  filterUserTripsByDate,
  calculateNewTripCost,
} from "../src/functions";

describe('See if the tests are running', () => {
  it('should return true', () => {
    expect(true).to.equal(true);
  });
});


describe('User trips', () => {
let travelers;
let trips;
  beforeEach(() => {
     travelers = [
      {name: 'Dusty', id:1},
      {name: 'Matt', id:2},
      {name: 'Jocelyn', id:3},
    ];
    trips = [
      {id: 1, userID:1, destination: 'Miami, Florida', date: '2000/05/01', duration: 2},
      {id: 2, userID:2, destination: 'Bozeman, Montanta', date: '2099/08/11', duration: 3},
      {id: 3, userID:2, destination: 'Paris, France', date: '2020/02/12', duration: 1},
      {id: 4, userID:3, destination: 'Stockholm, Sweden', date: '2023/06/04', duration: 9},
    ];

    
  }); 

  it('Should return the correct traveler based on the current user id', () => {
    expect(getCurrentUserInformation(1, travelers)).to.deep.equal({name: 'Dusty', id:1});
  });

  it('Should return a different traveler based on a different user id', () => {
    expect(getCurrentUserInformation(3, travelers)).to.deep.equal({name: 'Jocelyn', id:3})
  });

  it('Should return a string if the traveler is not found', () => {
    expect(getCurrentUserInformation(5, travelers)).to.deep.equal('The traveler id you entered does not match our records.')
  });
 
  it('Should return an array of trips the traveler went on', () => {
    expect(findUsersTrips(1, trips)).to.deep.equal([{id: 1, userID:1, destination: 'Miami, Florida', date: '2000/05/01', duration: 2}]);
  });

  it('Should return a different array of trips for a different traveler', () => {
    expect(findUsersTrips(2, trips)).to.deep.equal(
      [{id: 2, userID:2, destination: 'Bozeman, Montanta', date: '2099/08/11', duration: 3},
       {id: 3, userID:2, destination: 'Paris, France', date: '2020/02/12', duration: 1}]);
  });

  it('Should return a string if there aren\'t any trips that match the id', () => {
    expect(findUsersTrips(9, trips)).to.deep.equal('The traveler id you entered does not match our records.');
  });
})

