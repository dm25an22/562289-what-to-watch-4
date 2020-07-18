import {extend} from "../../utils";
import {getAdaptedData} from "../adapter";

const initialState = {
  films: null,
  promoFilm: null,
  comments: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`
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
  },

  loadComments(comments) {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
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
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const cloneResponse = [...response.data];
        const sortCommentsByDate = cloneResponse.sort((a, b) => new Date(b.date) - new Date(a.date));
        dispatch(ActionCreator.loadComments(sortCommentsByDate));
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

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
