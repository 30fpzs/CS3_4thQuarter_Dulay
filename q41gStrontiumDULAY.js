let rating = 0;

function submitRating(num)
{
    rating = num;

    let stars = document.querySelectorAll('.star');

    for(let i = 0; i < stars.length; i++)
        {
            if(i < num)
            {
                stars[i].style.color = 'yellow';
            }

            else
            {
                stars[i].style.color = 'gray';
            }
        }
}

function addMovie()
{
    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    
    let movie = {
        title: title,
        year: year,
        genre: genre,
        rating: rating
    };

    let movies = localStorage.getItem("movies");

    if(movies ==  null)
    {
        movies = [];
    }
    else
    {
        movies = JSON.parse(movies);
    }

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();
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
        for(let j = 0; j < movie.rating; j++)
        {
            stars += "★";
        }

        list.innerHTML +=
        "<div>" + 
        movie.title + " (" + movie.year + ") - " +
        movie.genre + ", Rating: " + stars +
        "</div>";
    }
}

displayMovies();