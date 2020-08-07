import {extend} from "../../utils";
import {getAdaptedUserData} from "../../adapter";
import {Operation as DataOperation} from "../data/data";

const StatusCode = {
  badRequest: 400
};

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: null
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`
};

const ActionCreator = {
  requireAuthorization(status) {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },

  setUserData(userData) {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userData
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        const adaptedUserData = getAdaptedUserData(response.data);

        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(adaptedUserData));
        dispatch(DataOperation.loadFavorites());
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData, onSuccess, onError) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then((response) => {
        const adaptedUserData = getAdaptedUserData(response.data);

        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(adaptedUserData));
        dispatch(DataOperation.loadFavorites());
        onSuccess();
      })
      .catch((err) => {
        if (err.response.status === StatusCode.badRequest) {
          onError();
        }
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });

    case ActionType.SET_USER_DATA:
      return extend(state, {
        userData: action.payload
      });
  }

  return state;
};

export {ActionCreator, Operation, AuthorizationStatus, reducer, ActionType};
