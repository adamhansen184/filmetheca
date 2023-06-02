// Declare and initialize constant variable strings containing the API keys for the TMDB and Watchmode APIs.
// TMDB API Documentation: https://developers.themoviedb.org/docs
// Watchmode API Documentation: https://api.watchmode.com/docs
const apiKeyTMDB = 'cac3d39cd60268fd28eb5af557322903';
const apiKeyWatchmode = 'gbfUPl5ghxgo8Q0kxoP5vcmHOvg2IuVomZdxVJES';

// Declare and initialize a variable to return the title query field in the DOM.
var titleQueryField = document.getElementById('titleQueryField');
// Declare and initialize a variable to return the title search form in the DOM.
var titleSearchForm = document.getElementById('titleSearchForm');
// Declare and initialize a variable to return the title search type field in the DOM.
var titleSearchTypeField = document.getElementById('titleSearchTypeField');

// Declare a function that will refresh the configuration details of the TMDB API configuration endpoint.
function configureTMDB() {

    // Store the configuration details object of the TMDB API configuration endpoint in local storage as TMDBConfiguration.
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKeyTMDB}`)
        .then( function(response) { return response.json() } )
        .then( function(data) { localStorage.setItem( 'TMDBConfiguration', JSON.stringify(data) ) } );
    
    // Store a true/false string value of the TMDB API configuration in local storage as TMDBConfigurationBoolean.    
    localStorage.setItem('TMDBConfigurationBoolean', 'true');

}

// Refresh the configuration details of the TMDB API configuration endpoint if they have never been retrieved or stored in local storage.
if (localStorage.getItem('TMDBConfigurationBoolean') === null || localStorage.getItem('TMDBConfigurationBoolean') === 'false') {
    configureTMDB();
}

// Declare and initialize a variable to store the configuration details of the TMDB API configuration endpoint pulled from local storage.
var configurationTMDB = JSON.parse(localStorage.getItem('TMDBConfiguration'));
// Declare and initialize a variable as a string to store the secure base image URL of the images provided by the TMDB API.
var imageBaseUrlTMDB = configurationTMDB.images.secure_base_url;
// Declare and initialize a variable as a number to store the first subsequent page number to search with the TMDB API.
var searchResultPageNumberTMDB = 1;
// Declare a variable to store the results of the search with the TMDB API.
var searchResultTMDB;
// Declare a variable to store the TMDB ID of the movie/show to search with the Watchmode API.
var titleQueryWatchmode;

// Wrap fetch call in a function called by a search box, drop-down selection, and search button.
function queryTMDB(event) {

    // Prevent the default behavior of the form submission.
    event.preventDefault();

    // Declare and initialize a variable as a string to store the value of the title to query with the TMDB API.
    let titleQueryTMDB = titleQueryField.value;
    // Declare and initialize a variable as a string to store the value of the type of media to query for with the TMDB API.
    // Valid values are 'movie' or 'tv'.
    let titleSearchTypeTMDB = titleSearchTypeField.value;

    // Perform a fetch call that will search using the TMDB API for a queried movie/show.
    fetch(`https://api.themoviedb.org/3/search/${titleSearchTypeTMDB}?api_key=${apiKeyTMDB}&query=${encodeURIComponent(titleQueryTMDB)}&include_adult=false&language=en-US&page=${searchResultPageNumberTMDB}`)
        .then( function(response) { return response.json() } )
        .then( function(data) { parseTMDBResults(data.results) } );
    
}

// Declare a function to parse the results of the search.
// TODO: Display the results of matching movies/shows to the user.
// TODO: For each movie/show in the list, display the title, poster image, and rating.
// TODO: For each movie/show in the list, include a button to add the movie/show to the user's list of movies/shows to watch, storing the data in local storage.
// TODO: For each movie/show in the list, include a button to add the movie/show to the user's list of watched movies/shows, storing the data in local storage.
// TODO: For each movie/show in the list, include a drop-down menu to rate a watched movie/show, storing the rating in local storage.
// TODO: Support multiple pages of results for a queried movie/show by implementing a button to display the next page of results.
function parseTMDBResults (results) {
    console.log('TMDB Search Results');
    console.log(results);

    for (var i = 0; i < results.length; i++) {
        console.log('Title ID');
        console.log(results[i].id);
        console.log('Title');
        console.log(results[i].title);
        console.log('Poster Image');
        console.log(results[i].poster_path);
        console.log('Vote Average');
        console.log(results[i].vote_average);
        console.log('Vote Count');
        console.log(results[i].vote_count);
    }
}

// Declare and initialize a variable to store a listing of all free and subscription streaming services in the United States supported by the Watchmode API.
// TODO: Implement a function called by a button that will refresh the list of streaming sources provided by the Watchmode API.
// TODO: Store the list of streaming sources in local storage.
// var streamingSourcesWatchmode = fetch(`https://api.watchmode.com/v1/sources/?apiKey=${apiKeyWatchmode}&regions=US&types=free,sub`)
//     .then( function(response) { return response.json() } )
//     .then( function(data) { return data } );
// console.log('Watchmode Streaming Sources');
// console.log(streamingSourcesWatchmode);

// Returns a listing of the streaming sources for a specified title using the title's TMDB ID.
// TODO: Display a list of streaming sources for a movie/show using the Watchmode API.
// fetch(`https://api.watchmode.com/v1/title/${idTMDB}/sources/?apiKey=${apiKeyWatchmode}`)
//     .then( function(response) { return response.json() } )
//     .then( function(data) { return data } );

// Add an event listener to the title search form that will call the queryTMDB function when the form is submitted.
titleSearchForm.addEventListener('submit', queryTMDB);
