"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

console.log(personalMovieDB);
