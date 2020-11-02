'use strict';

let numbersOfFilms;

function start() {
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {

        numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}

start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let answer = prompt('Один из последних просмотренных фильмов?', '');
        let rating = prompt('На сколько вы его оцените?', '');

        if (answer != null && rating != null && answer != '' && rating != '' && answer.length < 50) {
            personalMovieDB.movies[answer] = rating;
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы посмотрели слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы типичный зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Да вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();


function showMyDB(hidden) {

    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // let genres = prompt(`Ваш любий жанр под номером ${i}`, '');
        // personalMovieDB.genres[i - 1] = genres;
        personalMovieDB.genres[i - 1] = prompt(`Ваш любий жанр под номером ${i}`, '');
    }
}
writeYourGenres();