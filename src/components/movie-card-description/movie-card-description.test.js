import React from "react";
import renderer from "react-test-renderer";
import MovieCardDescription from "./movie-card-description.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";

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
        <MovieCardDescription
          film={mockFilms[0]}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render MovieCardDescription component with children`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <MovieCardDescription
          film={mockFilms[0]}
        >
          <React.Fragment>
            <h1>Text</h1>
          </React.Fragment>
        </MovieCardDescription>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
