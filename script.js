"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
let lastMovie = prompt("Один из последних просмотренных фильмов?", "");
let gradeMovie = prompt("На сколько оцените его?", "10");
let lastMovie2 = prompt("Один из последних просмотренных фильмов?", "");
let gradeMovie2 = prompt("На сколько оцените его?", "10");
personalMovieDB.movies[lastMovie] = gradeMovie;
personalMovieDB.movies[lastMovie2] = gradeMovie2;
console.log(personalMovieDB);