import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {mockFilms} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore({});

const promo = {
  titlePromo: `The Grand Budapest Hotel`,
  genrePromo: `Drama`,
  yearPromo: 2014,
};

it(`renders App component with main component`, () => {
  const store = mockStore({
    mockFilms,
    currentGenre: `All genre`,
    promo
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          currentFilm={-1}
          onSmallCardClick={() => {}}
          films={mockFilms}
          promo={promo}
          onGenreClick={() => {}}
          currentGenre={`All genre`}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders App component with MovieDetails component`, () => {
  const store = mockStore({
    mockFilms,
    currentGenre: `All genre`,
    promo
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          currentFilm={2}
          onSmallCardClick={() => {}}
          films={mockFilms}
          promo={promo}
          onGenreClick={() => {}}
          currentGenre={`All genre`}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
