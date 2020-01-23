const getMovies = () => {
    console.log("你好，世界");
    fetch("http://localhost:8088/Movies")
        .then(movies => movies.json())
        .then(parsedMovies => {
            renderMovies(parsedMovies);
        });
};