document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var movieName = document.getElementById("movieName").value;
    var starRating = document.getElementById("starRating").value;

    
    
    var review = {
        movieName: movieName,
        starRating: starRating
      };
      
      var reviews = localStorage.getItem("movieReviews");
      if (reviews) {
        reviews = JSON.parse(reviews);
        reviews.push(review);
        localStorage.setItem("movieReviews", JSON.stringify(reviews));
      } else {
        localStorage.setItem("movieReviews", JSON.stringify([review]));
      }
    alert("Review submitted!");

    console.log(review);


    document.getElementById("reviewForm").reset();
  });