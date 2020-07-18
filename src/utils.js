import React from "react";

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

const getRunTime = (time) => {
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


export {
  extend,
  ALL_GENRE,
  checkLengthGenres,
  getDescriptionRating,
  getRunTime,
  getListActors
};
