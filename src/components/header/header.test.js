import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from "../../history";

const mockStore = configureStore({});

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};


it(`renders Headers component without authorization`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Header />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
it(`renders Headers component with authorization`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Header />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
