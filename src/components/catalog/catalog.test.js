import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";

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
        <Catalog
          onSmallCardClick={() => {}}
          currentGenre={`Action`}
          onGenreClick={() => {}}
          genres={[`All genre`, `Drama`, `Action`]}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
