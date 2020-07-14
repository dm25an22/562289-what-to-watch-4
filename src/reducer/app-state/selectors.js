import NameSpace from "../name-space";

const getCurrentGenre = (state) => {
  return state[NameSpace.APP_STATE].currentGenre;
};

const getCurrentFilm = (state) => {
  return state[NameSpace.APP_STATE].currentFilm;
};

export {getCurrentGenre, getCurrentFilm};
