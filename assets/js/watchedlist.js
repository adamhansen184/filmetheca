// Initialize and define constants for API keys for the TMDB and Watchmode APIs.
// TMDB API Documentation: https://developers.themoviedb.org/docs
// Watchmode API Documentation: https://api.watchmode.com/docs
const apiKeyTMDB = 'cac3d39cd60268fd28eb5af557322903';
const apiKeyWatchmode = 'gbfUPl5ghxgo8Q0kxoP5vcmHOvg2IuVomZdxVJES';

// Initialize a variable to store the TMDB ID of the movie/show to search for with the Watchmode API.
var idTMDB;

// TODO: Implement a function called by a button that will refresh the list of streaming sources provided by the Watchmode API.
// TODO: Store the list of streaming sources in local storage.

// TODO: Implement a function called by a button that will display a list of streaming sources for a movie/show using the Watchmode API.

// Returns a listing of all free and subscription streaming services in the United States that the Watchmode API supports.
// fetch('https://api.watchmode.com/v1/sources/?apiKey=' + apiKeyWatchmode + '&regions=US&types=free,sub')
//     .then( function(response) { return response.json() } )
//     .then( function(data) { return data } );

// Returns a listing of the streaming sources for a specified title using the title's TMDB ID.
// fetch('https://api.watchmode.com/v1/title/' + idTMDB + '/sources/?apiKey=' + apiKeyWatchmode)
//     .then( function(response) { return response.json() } )
//     .then( function(data) { return data } );
