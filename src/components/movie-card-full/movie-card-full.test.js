import React from "react";
import renderer from "react-test-renderer";
import MovieCardFull from "./movie-card-full.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
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

it(`render MovieCardFull component`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      favorites: []
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store} >
        <Router history={history} >
          <MovieCardFull
            film={mockFilms[0]}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
