const movieHTML = (movie) => {
    return `
        <div class="movieItem">
            <p class="movieTitle">${movie.title}</p>
            <p><img src="${movie.image}" alt="${movie.title}"></p>
                <p class="movieText">Released: ${movie["release-date"]}</p>
                <p class="movieText">${time_convert(movie.runtime)}</p>
        </div>
        `
}

const renderMovies = (movies) => {
    const movieContainer = document.getElementById("movie-container");
    movies.forEach(movie => {
        movieContainer.innerHTML += movieHTML(movie);
    });
}

const time_convert = (num) => { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + "hr " + minutes + "min";        
}