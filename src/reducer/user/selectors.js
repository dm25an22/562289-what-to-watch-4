import NameSpace from "../name-space";

const getAuthStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export {getAuthStatus};
