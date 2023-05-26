  function displayReviews() {
    var reviews =localStorage.getItem ("movieReviews");
    if (reviews) {
        reviews = JSON.parse(reviews);

        var reviewListElement = document.getElementById("reviewList");
        reviewListElement.innerHTML=""; //clear existing reviews

        for (var i=0; i<reviews.length; i++) {
            var review = reviews[i];
            var reviewElement = document.createElement("div");
            reviewElement.textContent = "Movie: " + review.movieName + ", Rating: " + review.starRating + " stars," + " Streaming service: " + review.streamingService;
            reviewElement.classList.add("reviews");
            reviewListElement.appendChild(reviewElement);
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