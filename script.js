const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Вы посмотрели слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы типичный зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Да вы киноман');
} else {
    console.log('Ошибка');
}