import * as React from "react";
import * as renderer from "react-test-renderer";
import Promo from "./promo";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Router} from "react-router-dom";
import {history} from "../../history";

const mockStore = configureStore({});

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const store = mockStore({
  [NameSpace.DATA]: {
    films: mockFilms,
    promoFilm: mockFilms[0],
    favorites: [mockFilms[0]]
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
});


it(`Render Promo`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Promo
            film={mockFilms[0]}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
