  function displayReviews() {
    var reviews =localStorage.getItem ("movieReviews");
    if (reviews) {
        reviews = JSON.parse(reviews);

        var reviewListElement = document.getElementById("reviewList");
        reviewListElement.innerHTML=""; //clear existing reviews

        for (var i=0; i<reviews.length; i++) {
            var review = reviews[i];
           // create card container
            var cardElement = document.createElement("div");
            cardElement.classList.add("card")
            //create card body
            var cardBodyElement = document.createElement("div");
            cardBodyElement.classList.add("card-body");
            //create movie name element
            var movieNameElement = document.createElement("h5");
            movieNameElement.classList.add("card-title");
            movieNameElement.textContent = "Movie: " +review.movieName;
            //create rating element
            var ratingElement = document.createElement("p");
            ratingElement.classList.add("card-text");
            ratingElement.textContent = "Rating: " + review.starRating + " stars";
            //create streaming service element
            var streamingServiceElement = document.createElement("p");
            streamingServiceElement.classList.add("card-text");
            streamingServiceElement.textContent = "Streaming service: " + review.streamingService;
            //append elements to card body
            cardBodyElement.appendChild(movieNameElement);
            cardBodyElement.appendChild(ratingElement);
            cardBodyElement.appendChild(streamingServiceElement);
            //append card body to card container
            cardElement.appendChild(cardBodyElement);
            //append card container to review list
            reviewListElement.appendChild(cardElement);


        }
    }
  }

  //display the reviews upon page loading
  displayReviews();

  document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault(); //prevents form from submitting

    // get values entered by user
    var movieName = document.getElementById("movieName").value;
    var starRating = document.getElementById("starRating").value;
    var streamingService = document.getElementById("streamingService").value;

    // save review to local storage
    var review = {
        movieName: movieName,
        starRating: starRating,
        streamingService: streamingService
      };
      
      var reviews = localStorage.getItem("movieReviews");
      if (reviews) {
        reviews = JSON.parse(reviews);
        reviews.push(review);
        localStorage.setItem("movieReviews", JSON.stringify(reviews));
      } else {
        localStorage.setItem("movieReviews", JSON.stringify([review]));
      }
    
      // display reviews
      displayReviews();
    
      alert("Review submitted!");

      //reset the form
      document.getElementById("reviewForm").reset();

  })