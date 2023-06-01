// Declare and initialize constant variable strings containing the API keys for the TMDB and Watchmode APIs.
// TMDB API Documentation: https://developers.themoviedb.org/docs
// Watchmode API Documentation: https://api.watchmode.com/docs
const apiKeyTMDB = 'cac3d39cd60268fd28eb5af557322903';
const apiKeyWatchmode = 'gbfUPl5ghxgo8Q0kxoP5vcmHOvg2IuVomZdxVJES';

// Declare and initialize a variable as an object to store the configuration details of the TMDB API configuration endpoint.
// TODO: Implement a function called by a button that will refresh the configuration details of the TMDB API configuration endpoint.
// TODO: Store the configuration details in local storage
var configurationTMDB = fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKeyTMDB}`)
    .then( function(response) {
        return response.json();
    } )
    .then( function(data) {
        return data;
    } );
// Declare and initialize a variable as a string to store the type of media to search for with the TMDB API.
// Valid values are 'movie' or 'tv'.
var searchTypeTMDB = 'movie';
// Declare and initialize a variable as a number to store the first subsequent page number to search with the TMDB API.
var pageTMDB = 2;
// Declare and initialize a variable as a string to store the query to search with the TMDB API.
var queryTMDB = 'Lord of the Rings';
// Declare a variable to store the results of the search with the TMDB API.
var resultsTMDB;
// Declare a variable to store the TMDB ID of the movie/show to search with the Watchmode API.
var idTMDB;

// Implement a fetch call that will search using the TMDB API for a queried movie/show.
// TODO: Wrap fetch call in a function called by a search box, drop-down selection, and search button.
// TODO: Parse the results of the search and display a list of matching movies/shows to the user.
// TODO: For each movie/show in the list, display the title and poster image.
// TODO: For each movie/show in the list, include a button to add the movie/show to the user's list of movies/shows to watch, storing the TMDB ID in local storage.
// TODO: For each movie/show in the list, include a button to add the movie/show to the user's list of watched movies/shows, storing the TMDB ID in local storage.
// TODO: For each movie/show in the list, include a drop-down menu to rate a watched movie/show, storing the rating in local storage.
fetch(`https://api.themoviedb.org/3/search/${searchTypeTMDB}?api_key=${apiKeyTMDB}&query=${encodeURIComponent(queryTMDB)}&include_adult=false&language=en-US`)
    .then( function(initialResponse) { 
        return initialResponse.json();
    } )
    .then( function(initialData) {
        if (initialData.total_pages <= 1) {
            // Store the results of the search as an array in resultsTMDB.
            resultsTMDB = initialData.results;
        } else {
            // Store the results of the initial search as an array in resultsTMDB.
            resultsTMDB = initialData.results;
            // Do-while loop to fetch subsequent pages of results for a queried movie/show.
            do {
                // Implement a fetch call that will search using the TMDB API for subsequent pages of results for a queried movie/show, beginning at page 2.
                fetch(`https://api.themoviedb.org/3/search/${searchTypeTMDB}?api_key=${apiKeyTMDB}&query=${encodeURIComponent(queryTMDB)}&include_adult=false&language=en-US&page=${pageTMDB}`)
                    .then( function(subsequentResponse) {
                        return subsequentResponse.json();
                    } )
                    .then( function(subsequentData) {
                        // TODO: Append the results of the subsequent search(es) to the resultsTMDB array.
                        console.log(subsequentData.results);
                        // resultsTMDB = resultsTMDB.concat(subsequentResults); <-- This doesn't work.
                    } );
                // Increment the page number to search with the TMDB API.
                pageTMDB++;
            } while (pageTMDB <= initialData.total_pages);
        }
     } );

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
