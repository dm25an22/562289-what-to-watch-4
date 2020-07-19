import NameSpace from "../name-space";

const getCurrentGenre = (state) => {
  return state[NameSpace.APP_STATE].currentGenre;
};

const getCurrentFilm = (state) => {
  return state[NameSpace.APP_STATE].currentFilm;
};

const getSignIn = (state) => {
  return state[NameSpace.APP_STATE].isSignIn;
};

export {getCurrentGenre, getCurrentFilm, getSignIn};
