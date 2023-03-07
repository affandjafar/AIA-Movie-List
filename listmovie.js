const movies = [
    { title: "Bullet Train", popularity: 9.5, date: "5 August 2022", image: "./image/Bullet Train.jpg" },
    { title: "Interstellar", popularity: 9.8, date: "6 November 2014", image: "./image/Interstellar.jpg" },
    { title: "The Dark Knight", popularity: 9.2, date: "17 July 2008", image: "./image/The Dark Knight.jpg" },
    { title: "Deadpool 2", popularity: 9.0, date: "31 May 2018", image: "./image/Deadpool 2.jpg" },
    { title: "Deadpool", popularity: 8.9, date: "11 February 2016", image: "./image/Deadpool.jpg" },
    { title: "Joker", popularity: 9.2, date: "4 October 2024", image: "./image/Joker.jpg" },
    { title: "Inception", popularity: 9.0, date: "15 July 2010", image: "./image/Inception.jpg" },
    { title: "A Man Called Otto", popularity: 8.5, date: "23 March 2023", image: "./image/A Man Called Otto.jpg" },
    { title: "John Wick", popularity: 9.7, date: "23 October 2014", image: "./image/John Wick.jpg" },
    { title: "The Green Mile", popularity: 9.6, date: "16 March 2000", image: "./image/The Green Mile.jpg" }
];

const mainMovie = document.querySelector('#movies')

// function displayMovies(){
//     const moviesList = document.getElementById("movies");
//     moviesList.innerHTML = "";
//     for (let i = 0; i < movies.length; i++){
//         const movie = movies[i];
//         const listItem = document.createElement("li");
//         const movieBox = document.createElement("div");
//         movieBox.classList.add("movie-box");
//         const image = document.createElement("img");
//         image.src = "image/" + movie.title + ".jpg";
//         const title = document.createElement("h2");
//         title.innerText = movie.title + "[" + movie.popularity + "]" + movie.date;
//         movieBox.appendChild(image);
//         movieBox.appendChild(title);
//         listItem.appendChild(movieBox);
//         moviesList.appendChild(listItem);
//     }
// }


function displayMovies() {
    mainMovie.innerHTML = "";
    movies.map((item) => {
        mainMovie.innerHTML += `
    <div class= "boxmovies">
        <img src="${item.image}" alt="" class="imagebox">
        <div class="litlebox">
            <h5 class="boxtitle">${item.title}<h5>
            <p class="boxdate">${item.date}</p>
        </div>
        </div>
    `
    })
}

function selectOption(x){
    if (x === '1') {
        sortMoviesDescending()
    } else {
        sortMoviesAscending()
    }
}

function sortMoviesDescending() {
    movies.sort((a, b) => b.popularity - a.popularity);
    displayMovies();
}

function sortMoviesAscending() {
    movies.sort((a, b) => a.popularity - b.popularity);
    displayMovies();
}

displayMovies()