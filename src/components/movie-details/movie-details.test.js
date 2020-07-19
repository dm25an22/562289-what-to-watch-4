import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";


const mockStore = configureStore({});
it(`Render MoviePage`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
    },
    [NameSpace.APP_STATE]: {
      currentGenre: `Drama`,
    }
  });

  const tree = renderer.create(
      <Provider store={store} >
        <MovieDetails
          film={mockFilms[0]}
          onSmallCardClick={() => {}}
          renderCurrentInfo={() => {}}
          clickOnTab={() => {}}
          currentTab={`Overview`}
        />
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
