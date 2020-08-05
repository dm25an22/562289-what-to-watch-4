import NameSpace from "../name-space";

const getAuthStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getUserData = (state) => {
  return state[NameSpace.USER].userData;
};

export {getAuthStatus, getUserData};
