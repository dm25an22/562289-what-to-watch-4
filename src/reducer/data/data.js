import {extend} from "../../utils";
import {getAdaptedData} from "../adapter";

const initialState = {
  films: null,
  promoFilm: null
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`
};

const ActionCreator = {
  loadFilm(films) {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },

  loadPromo(film) {
    return {
      type: ActionType.LOAD_PROMO,
      payload: film
    };
  }
};

const Operation = {
  loadFilm: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map((film) => getAdaptedData(film));
        dispatch(ActionCreator.loadFilm(films));
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = getAdaptedData(response.data);
        dispatch(ActionCreator.loadPromo(promoFilm));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
