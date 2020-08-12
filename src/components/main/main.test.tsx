import * as React from "react";
import * as renderer from "react-test-renderer";
import Main from "./main";
import configureStore from "redux-mock-store";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from "../../history";

const mockStore = configureStore({});

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};
it(`Render Main`, () => {
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

  window.scrollTo = jest.fn();

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Main
            promoFilm={mockFilms[0]}
            films={mockFilms}
            genres={[`All genre`, `Drama`, `Action`]}
          />
        </Router>
      </Provider>
      , {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
