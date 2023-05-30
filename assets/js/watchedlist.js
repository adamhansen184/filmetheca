// Declare and initialize variable constants for API keys for the TMDB and Watchmode APIs.
// TMDB API Documentation: https://developers.themoviedb.org/docs
// Watchmode API Documentation: https://api.watchmode.com/docs
const apiKeyTMDB = 'cac3d39cd60268fd28eb5af557322903';
const apiKeyWatchmode = 'gbfUPl5ghxgo8Q0kxoP5vcmHOvg2IuVomZdxVJES';

// Declare and initialize a variable to store the type of media to search for with the TMDB API.
// Valid values are 'movie' or 'tv'.
var searchTypeTMDB = 'movie';
// Declare a variable to store the page number to the TMDB API search results.
var pageTMDB = 1;
// Declare a variable to store the query string of the TMDB API search results.
var queryTMDB = 'Lord of the Rings';

// Initialize a variable to store the TMDB ID of the movie/show to search for with the Watchmode API.
var idTMDB;

// Implement a fetch call that will search using the TMDB API for a queried movie/show.
// TODO: Add support for pagination of search results by adding the query parameter &page=${pageTMDB}.
// TODO: Wrap fetch call in a function called by a search box and button.
fetch(`https://api.themoviedb.org/3/search/${searchTypeTMDB}?api_key=${apiKeyTMDB}&query=${encodeURIComponent(queryTMDB)}&include_adult=false&language=en-US`)
    .then( function(response) { return response.json() } )
    .then( function(data) { console.log(data.results) } );


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
