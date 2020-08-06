import {reducer, ActionType, AuthorizationStatus, Operation} from "./user";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {userDataMock} from "../../mocks/mock-for-tests";
import {getAdaptedUserData} from "../../adapter";

const api = createAPI(() => {});
it(`Reducer with type REQUIRED_AUTHORIZATION should return payload `, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

it(`Should make a correct checkAuth call to /login `, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const checkAuth = Operation.checkAuth();

  apiMock
    .onGet(`/login`)
    .reply(200, userDataMock);

  return checkAuth(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_USER_DATA,
        payload: getAdaptedUserData(userDataMock),
      });
    });
});

const authData = {
  email: `123456@gmail.com`,
  password: 123456
};

it(`Should make a correct login call to /login `, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const login = Operation.login(authData);
  const onSuccess = jest.fn();
  const onError = jest.fn();

  apiMock
    .onPost(`/login`, authData)
    .reply(200, authData);

  return login(dispatch, () => {}, api)
    .then(() => {
      onSuccess();
      expect(onSuccess).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    })
    .catch(() => {
      onError();
    });
});

it(`Should check error work to /login with failed data`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const login = Operation.login(authData);
  const onError = jest.fn();

  apiMock
    .onPost(`/login`, {})
    .reply(200, authData);

  return login(dispatch, () => {}, api)
    .then(() => {
    })
    .catch(() => {
      onError();
      expect(onError).toHaveBeenCalledTimes(1);
    });
});
