import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from "../../history";

const mockStore = configureStore({});

const store = mockStore({
  [NameSpace.DATA]: {
    films: mockFilms,
  },
  [NameSpace.APP_STATE]: {
    currentGenre: `All genre`,
  },
});

it(`render Comment component`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Catalog
            currentGenre={`Action`}
            onGenreClick={() => {}}
            genres={[`All genre`, `Drama`, `Action`]}
            films={mockFilms}
          />
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
