import {extend, removeFilmFromFavorites} from "../../utils";
import {getAdaptedFilm, getAdaptedComment} from "../../adapter";

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
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  REMOVE_FROM_FAVORITES: `REMOVE_FROM_FAVORITES`,
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

  addToFavorites(film) {
    return {
      type: ActionType.ADD_TO_FAVORITES,
      payload: film
    };
  },

  removeFromFavorites(film) {
    return {
      type: ActionType.REMOVE_FROM_FAVORITES,
      payload: film
    };
  },
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

  loadComments: (id, onSuccess, onError) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const cloneResponse = [...response.data].map((comment) => getAdaptedComment(comment));
        const sortCommentsByDate = cloneResponse.sort((a, b) => new Date(b.date) - new Date(a.date));
        dispatch(ActionCreator.loadComments(sortCommentsByDate));
        onSuccess();
      })
      .catch((err) => {
        onError(err.response.status);
      });
  },

  addNewComment: (filmId, newComment, onSuccess, onError) => (dispath, getState, api) => {
    return api.post(`/comments/${filmId}`, newComment)
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        onError();
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
    return api.post(`/favorite/${film.id}/${status}`)
      .then((response) => {
        const adaptedResponse = getAdaptedFilm(response.data);
        if (status) {
          dispatch(ActionCreator.addToFavorites(adaptedResponse));
        } else {
          dispatch(ActionCreator.removeFromFavorites(adaptedResponse));
        }
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

    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        favorites: [...state.favorites, action.payload]
      });

    case ActionType.REMOVE_FROM_FAVORITES:
      return extend(state, {
        favorites: removeFilmFromFavorites([...state.favorites], action.payload)
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
