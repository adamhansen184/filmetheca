// API KEY
key = "https://www.omdbapi.com/db5d550d";


// References
let movieNameRef = document.getElementById("movie-name");
let searchbutton = document.getElementById("search-button");
let result = document.getElementById("result");

// Functions to use API
let getMvoie= () => {
    let movieNameRef = movieNameRef.value;
    let url= 'http://www.omdbapi.com/?t=${movieName}&apikey${key}';
    if(movieName.lenght <= 0){
        result.innerHTML
    }
};

