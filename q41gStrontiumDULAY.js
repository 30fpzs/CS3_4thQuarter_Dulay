let rating = 0;

function submitRating(num)
{
    rating = num;

    let stars = document.querySelectorAll('#starRating .star');

    for(let i = 0; i < stars.length; i++)
        {
            let starNum = i + 1;

            if(num >= starNum)
            {
                stars[i].style.setProperty('--half', '100%');
            }

            else if(num >= starNum - 0.5)
            {
                stars[i].style.setProperty('--half', '50%');
            }

            else
            {
                stars[i].style.setProperty('--half', '0%');
            }
        }
}

function addMovie()
{
    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;

    let movies = localStorage.getItem("movies");

    if(movies ==  null)
    {
        movies = [];
    }
    else
    {
        movies = JSON.parse(movies);
    }

    let foundMovie = false;

    for(let i = 0; i < movies.length; i++)
    {
        if(movies[i].title.toLowerCase() === title.toLowerCase())
        {
            movies[i].year = year;
            movies[i].genre = genre;

            movies[i].rating = (movies[i].rating + rating) / 2; //This is to average the score rating for a movie, if it is already found in the data set.

            foundMovie = true; //This is to show that the movie is already found in the data set.
            break;
        }
    }

    if(!foundMovie)
    {
        let movie = {
        title: title,
        year: year,
        genre: genre,
        rating: rating
        };

        movies.push(movie);
    }

    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();

    rating = 0;

    let stars = document.querySelectorAll('#starRating .star');

    for(let i = 0; i < stars.length; i++)
    {
        stars[i].style.setProperty('--half', '0%');
    }
}

function createStars()
{
    let starRating = document.getElementById("starRating");

    for(let i = 1; i <= 5; i++)
    {
        let star = document.createElement("span");
        star.className = "star";
        star.innerHTML = "★";

        star.addEventListener("click", function(event)
        {
            let rect = star.getBoundingClientRect();
            let clickX = event.clientX - rect.left;

            if(clickX < rect.width / 2)
            {
                submitRating(i - 0.5);
            }
            else
            {
                submitRating(i);
            }
        });

        starRating.appendChild(star);
    }
}

function displayMovies()
{
    let movies = localStorage.getItem("movies");

    if(movies == null)
    {
        movies = [];
    }
    else
    {
        movies = JSON.parse(movies);
    }

    let list = document.getElementById("movieList");

    list.innerHTML = "";

    for(let i = 0; i < movies.length; i++)
    {
        let movie = movies[i];
        let stars = "";

        let fullStar = Math.floor(movie.rating);
        let halfStar = movie.rating % 1 !== 0;

        for(let j = 0; j < fullStar; j++)
        {
            stars += "★";
        }

        if(halfStar)
        {
            stars += "⯪";
        }

        list.innerHTML +=
        "<div>" + 
        movie.title + " (" + movie.year + ") - " +
        movie.genre + ", Rating: " + stars +
        " <button onclick = 'deleteMovie(" + i + ")'>Delete</button>" +
        "</div>";
    }
}

function deleteMovie(index)
{
    if(confirm("Are you sure you want to delete this movie?"))
    {
        let movies = JSON.parse(localStorage.getItem("movies"));
        
        movies.splice(index, 1);

        localStorage.setItem("movies", JSON.stringify(movies));

        displayMovies();
    }
}

createStars();
displayMovies();
