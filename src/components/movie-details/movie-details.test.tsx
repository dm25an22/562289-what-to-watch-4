import * as React from "react";
import * as renderer from "react-test-renderer";
import MovieDetails from "./movie-details";
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

it(`Render MoviePage`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      favorites: []
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  window.scrollTo = jest.fn();

  const tree = renderer.create(
      <Provider store={store} >
        <Router history={history} >
          <MovieDetails
            authStatus={ AuthorizationStatus.NO_AUTH}
            film={mockFilms[0]}
            films={mockFilms}
          />
        </Router>
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
