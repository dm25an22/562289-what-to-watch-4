import React from "react";
import renderer from "react-test-renderer";
import MovieCardFull from "./movie-card-full.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";


const mockStore = configureStore({});

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

it(`render MovieCardFull component`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store} >
        <MovieCardFull
          film={mockFilms[0]}
          currentTab={`Overview`}
          clickOnTab={() => {}}
          renderCurrentInfo={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
