import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore({});

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const store = mockStore({
  [NameSpace.DATA]: {
    films: mockFilms,
  },
  [NameSpace.APP_STATE]: {
    currentGenre: `All genre`,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
});

it(`Render MoviePage`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <MovieDetails
          film={mockFilms[0]}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
