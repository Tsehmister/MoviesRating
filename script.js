const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer = prompt('Один из последних просмотренных фильмов?', '');
let rating = prompt('На сколько вы его оцените?', '');
let answer1 = prompt('Один из последних просмотренных фильмов?', '');
let rating1 = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[answer] = rating;
personalMovieDB.movies[answer1] = rating1;

console.log(personalMovieDB);