import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {ALL_GENRE, checkLengthGenres} from "../../utils";
import {getCurrentGenre, getCurrentFilm} from "../app-state/selectors";

const MAX_FILIMS_IN_SIMILAR = 4;


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

const getFilmsByFilter = createSelector(
    getFilms,
    getCurrentGenre,
    (films, genre) => {
      if (genre === ALL_GENRE) {
        return films;
      } else {
        return films.filter((it) => it.genre === genre);
      }
    }
);

const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

const getSimilarFilms = createSelector(
    getFilmsByFilter,
    getCurrentFilm,
    (films, currentFilmId) => {
      const filmsByFilterCopy = [...films];
      const filmIndex = filmsByFilterCopy.findIndex((it) => it.id === currentFilmId);

      filmsByFilterCopy.splice(filmIndex, 1);
      return filmsByFilterCopy.slice(0, MAX_FILIMS_IN_SIMILAR);
    }
);

export {
  getFilms,
  getPromoFilm,
  getFilmsByFilter,
  getUniqueGeners,
  getComments,
  getSimilarFilms
};
