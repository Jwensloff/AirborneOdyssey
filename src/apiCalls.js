const allTravelersURL = 'http://localhost:3001/api/v1/travelers';
const singleTravelerURL = 'http://localhost:3001/api/v1/travelers/<id>';
// where <id> will be the number of a travelers id 
const allTripsURL ='http://localhost:3001/api/v1/trips';
const allDestinations = 'http://localhost:3001/api/v1/destinations';

const urlArray = [allTravelersURL, allTripsURL, allDestinations];

// GET requests 
export const createFetchRequests = () => {
  return urlArray.map((url) =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
);
}