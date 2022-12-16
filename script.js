"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let lastMovie = prompt("Один из последних просмотренных фильмов?", "");
      let gradeMovie = prompt("На сколько оцените его?", "10");
      if (
        lastMovie == "" ||
        lastMovie == null ||
        lastMovie.length > 50 ||
        gradeMovie == "" ||
        gradeMovie == null ||
        gradeMovie.length > 50
      ) {
        i--;
        continue;
      }
      personalMovieDB.movies[lastMovie] = gradeMovie;
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 1; i++) {
      let genres = prompt(`Ваши любимые жанры через запятую`, "");
      if (genres == null || genres == "") {
        alert("Ошибка, введите правильное значение");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
      }
    }
    personalMovieDB.genres.forEach(function (element, i, arr) {
      console.log(`Любимый жанр ${i + 1} - это ${element}`);
    });
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
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
    } else personalMovieDB.privat = true;
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);
