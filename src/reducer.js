import films from "./mocks/films";
import {extend, ALL_GENRE} from "./utils";


const promo = {
  titlePromo: `The Grand Budapest Hotel`,
  genrePromo: `Drama`,
  yearPromo: 2014,
};


const initialState = {
  films,
  currentGenre: ALL_GENRE,
  promo
};

const ActionType = {
  CURRENT_GENRE: `CURRENT_GENRE`
};

const ActionCreator = {
  currentGenre(genre) {
    return {
      type: ActionType.CURRENT_GENRE,
      payload: genre
    };
  },
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
