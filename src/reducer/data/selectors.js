import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {checkLengthGenres} from "../../utils";
import {ALL_GENRE} from "../../constans";

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

const getUniqueGeners = createSelector(
    getFilms,
    (films) => {
      const genresList = [...new Set(films.map((it) => it.genre))].sort();
      return [ALL_GENRE].concat(checkLengthGenres(genresList));
    }
);

const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

const getFavorites = (state) => {
  return state[NameSpace.DATA].favorites;
};

export {
  getFilms,
  getPromoFilm,
  getUniqueGeners,
  getComments,
  getFavorites,
};
