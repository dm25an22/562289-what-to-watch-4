import films from "./mocks/films";
import {extend} from "./utils";

const ALL_GENRE = `All genre`;
const MAX_GENRES = 9;

const promo = {
  titlePromo: `The Grand Budapest Hotel`,
  genrePromo: `Drama`,
  yearPromo: 2014,
};

const getUniqueGenres = (movies) => {
  const genresUnique = [...new Set(movies.map((it) => it.genre))].sort();

  return [ALL_GENRE].concat(checkLengthGenres(genresUnique));
};

const checkLengthGenres = (genres) => {
  if (genres.length > MAX_GENRES) {
    return genres.slice(0, MAX_GENRES);
  }

  return genres;
};

const initialState = {
  films,
  filmsByGenre: films,
  genres: checkLengthGenres(getUniqueGenres(films)),
  promo
};

const ActionType = {
  FILTER: `FILTER`
};

const ActionCreator = {
  filterByGenre(filmsList, genre) {
    let movies = [];

    if (genre === ALL_GENRE) {
      movies = filmsList;
    } else {
      movies = filmsList.filter((it) => it.genre === genre);
    }

    return {
      type: ActionType.FILTER,
      payload: movies
    };
  }
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.FILTER:
      return extend(state, {
        filmsByGenre: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator};
