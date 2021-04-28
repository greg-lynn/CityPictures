const cityFormCapture = document.getElementById('citipix-form');

// Put an event listener on the form
cityFormCapture.addEventListener('submit', function(event) {

  // Stop propogation to the backend
  event.preventDefault();

  // Get the text input fields values with .value on the input
  const city = document.getElementById('city-type').value;

  // Use .trim() to get rid of potential white space from the original 
  // Use .toLowerCase() to avoid needing account for upper and lower cases
  const cleanedCity = city.trim().toLowerCase();

  // Before we add, clear out the other classes
  document.body.classList = "";

  // Run text through each set of conditions
  // CITY CONDITIONALS
  if (cleanedCity === 'new york' || cleanedCity === 'new york city' || cleanedCity === 'nyc') {
    document.body.classList.add('nyc');
  }
 
  else if (cleanedCity === 'san francisco' || cleanedCity === 'bay area' || cleanedCity === 'sf') {
    document.body.classList.add('sf');
  }

  else if (cleanedCity === 'los angeles' || cleanedCity === 'la' || cleanedCity === 'lax') {
    document.body.classList.add('la');
  }

  else if (cleanedCity === 'austin' || cleanedCity === 'atx') {
    document.body.classList.add('austin');
  }
  
  else if (cleanedCity === 'sydney' || cleanedCity === 'syd') {
    document.body.classList.add('sydney');
  }

  // Resets form value
  cityFormCapture.reset();
});