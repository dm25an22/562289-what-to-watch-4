import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";


const mockStore = configureStore();

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};


const store = mockStore({
  [NameSpace.APP_STATE]: {
    currentGenre: `All genre`,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
});

it(`Render GenreList`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <GenresList
          currentGenre={`All genre`}
          onGenreClick={() => {}}
          genres={[
            `All genre`,
            `Action`,
            `Adventure`
          ]}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
