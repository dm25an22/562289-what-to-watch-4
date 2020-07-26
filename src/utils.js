import React from "react";
import {MONTHS} from './consts';

const ALL_GENRE = `All genre`;
const MAX_GENRES = 9;


const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const checkLengthGenres = (genres) => {
  if (genres.length > MAX_GENRES) {
    return genres.slice(0, MAX_GENRES);
  }

  return genres;
};

const getDescriptionRating = (rating) => {

  switch (true) {
    case rating < 3:
      return `Bad`;

    case rating >= 3 && rating < 5:
      return `Normal`;

    case rating >= 5 && rating < 8:
      return `Good`;

    case rating >= 8 && rating < 10:
      return `Very good`;

    case rating >= 10:
      return `Awesome`;
  }
  return `Unknown`;
};

const getRatingWithComma = (rating) => {
  if (Number.isInteger(rating)) {
    return commaReplacement(rating.toFixed(1));
  }

  return commaReplacement(rating);
};


const getFormatedRunTime = (time) => {
  const minute = time % 60;
  const hour = Math.floor(time / 60);

  return `${hour > 0 ? `${hour}h ` : ``}${minute > 0 ? `${minute}m` : ``}`;
};

const getListActors = (list) => {
  return list.map((it, index) => {
    if (index !== list.length - 1) {
      return <React.Fragment key={it}> {it}, <br/> </React.Fragment>;
    } else {
      return <React.Fragment key={it}> {it} </React.Fragment>;
    }
  });
};

const getDateForComment = (strDate) => {
  const date = new Date(strDate);
  const year = date.getFullYear();
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const month = MONTHS[monthIndex];

  return `${month} ${day}, ${year}`;
};

const commaReplacement = (rating) => {
  return String(rating).replace(`.`, `,`);
};

const getFilmsByGener = (films, genre) => {
  if (genre === ALL_GENRE) {
    return films;
  } else {
    return films.filter((it) => it.genre === genre);
  }
};

export {
  extend,
  ALL_GENRE,
  checkLengthGenres,
  getDescriptionRating,
  getFormatedRunTime,
  getListActors,
  getDateForComment,
  getRatingWithComma,
  getFilmsByGener
};
