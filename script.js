'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {

            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Вы посмотрели слишком мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы типичный зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Да вы киноман');
        } else {
            console.log('Ошибка');
        }
    },

    showMyDB: function (hidden) {

        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {

            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {

            let genres = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genres === '' || genres == null) {
                console.log('Введены некоректные данные...');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i+1} - это ${item} `);
        });
    }

};