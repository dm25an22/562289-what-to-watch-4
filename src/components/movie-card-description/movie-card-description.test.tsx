import * as React from "react";
import * as renderer from "react-test-renderer";
import {MovieCardDescription} from "./movie-card-description";
import {mockFilms, noop} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from "../../history";

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const mockStore = configureStore({});

const store = mockStore({
  [NameSpace.DATA]: {
    films: mockFilms,
    favorites: []
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
});

it(`render MovieCardDescription component`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MovieCardDescription
            film={mockFilms[0]}
            favoriteList={[]}
            onMyListBtnClick={noop}
            authStatus={`AUTH`}
          />
        </Router>

      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render MovieCardDescription component with children`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MovieCardDescription
            film={mockFilms[0]}
            favoriteList={[]}
            onMyListBtnClick={noop}
            authStatus={`AUTH`}
          >
            <React.Fragment>
              <h1>Text</h1>
            </React.Fragment>
          </MovieCardDescription>
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
