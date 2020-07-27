import {extend} from "../../utils";
import {getAdaptedFilm, getAdaptedComment, filmToRAW} from "../adapter";
import {getPromoFilm} from "./selectors";

const initialState = {
  films: null,
  promoFilm: null,
  comments: null,
  favorites: []
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  SET_INITIAL_COMMENTS: `SET_INITIAL_COMMENTS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  UPDATE_PROMO: `UPDATE_PROMO`,
  UPDATE_FILMS: `UPDATE_FILMS`
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
  },

  setInitialComments() {
    return {
      type: ActionType.SET_INITIAL_COMMENTS,
      payload: null
    };
  },

  loadFavorites(favorites) {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites
    };
  },

  updateFilms(film) {
    return {
      type: ActionType.UPDATE_FILMS,
      payload: film
    };
  },

  updatePromo(film) {
    return {
      type: ActionType.UPDATE_PROMO,
      payload: film
    };
  }
};

const Operation = {
  loadFilm: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map((film) => getAdaptedFilm(film));
        dispatch(ActionCreator.loadFilm(films));
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = getAdaptedFilm(response.data);
        dispatch(ActionCreator.loadPromo(promoFilm));
      });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const cloneResponse = [...response.data].map((comment) => getAdaptedComment(comment));
        const sortCommentsByDate = cloneResponse.sort((a, b) => new Date(b.date) - new Date(a.date));
        dispatch(ActionCreator.loadComments(sortCommentsByDate));
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favorites = response.data.map((film) => getAdaptedFilm(film));
        dispatch(ActionCreator.loadFavorites(favorites));
      });
  },

  toggleFavorite: (film, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${film.id}/${status}`, filmToRAW(film))
      .then((response) => {
        const adaptedResponse = getAdaptedFilm(response.data);
        const state = getState();
        const promoFilm = getPromoFilm(state);

        if (adaptedResponse.id === promoFilm.id) {
          dispatch(ActionCreator.updatePromo(adaptedResponse));
        }

        dispatch(ActionCreator.updateFilms(adaptedResponse));
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

    case ActionType.SET_INITIAL_COMMENTS:
      return extend(state, {
        comments: action.payload
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });

    case ActionType.UPDATE_PROMO:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.UPDATE_FILMS:
      return extend(state, {
        films: state.films.map((film) => {
          if (film.id === action.payload.id) {
            return action.payload;
          }
          return film;
        })
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
