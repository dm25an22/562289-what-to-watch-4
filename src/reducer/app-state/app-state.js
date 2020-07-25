import {extend, ALL_GENRE} from "../../utils";

const initialState = {
  currentGenre: ALL_GENRE,
  currentFilm: -1,
};

const ActionType = {
  CURRENT_GENRE: `CURRENT_GENRE`,
  CURRENT_FILM: `CURRENT_FILM`,
};

const ActionCreator = {

  currentGenre(genre) {
    return {
      type: ActionType.CURRENT_GENRE,
      payload: genre
    };
  },

  currentFilm(film) {
    return {
      type: ActionType.CURRENT_FILM,
      payload: film
    };
  },

};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload
      });

    case ActionType.CURRENT_FILM:
      return extend(state, {
        currentFilm: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
