// query selectors 
const userName = document.querySelector('.user-name');
const userSpending = document.querySelector('.display-user-spending');
const userTripGrid = document.querySelector('.user-trip-grid');


export const displayUserName = (currentUser) => {
  userName.innerText = '';
  userName.innerText = currentUser.name;
}

export const displayUserSpending = (calculatedUserSpending) => {
  userSpending.innerText = '';
  userSpending.innerText = `You have spent $${calculatedUserSpending} on your travels!`
}

export const displayUserTrips = (userTripDestinations) => {
  userTripGrid.innerHTML = '';
 
  userTripDestinations.forEach((destination) => {
    userTripGrid.innerHTML +=
    `<article class='destination-card' id = '${destination.id}'>
    <img class='destination-card img' src='${destination.image}' alt='${destination.alt}'>
    <h2>${destination.destination}</h2>`
  })
  return userTripDestinations;
}