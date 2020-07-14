import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {mockFilms} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore({});

const promo = {
  id: 1,
  title: `Promo`,
  moviePoster: `film.poster_image`,
  bigPoster: `film.background_image`,
  smallCardImg: `film.preview_image`,
  genre: `film.genre`,
  year: 1998,
  description: `film.description`,
  preview: `film.preview_video_link`,
  rating: 3.2,
  descriptionRating: `Bad`,
  quantityVotes: 1290,
  producer: `film.director`,
  listActors: [`1`, `2`, `3`],
  runTime: 120,
  videoLink: `film.video_link`,
  isFavorite: true,
  backgroundColor: `red`
};

it(`renders App component with main component`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      promoFilm: promo
    },
    [NameSpace.APP_STATE]: {
      currentGenre: `All genre`,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          currentFilm={-1}
          onSmallCardClick={() => {}}
          films={mockFilms}
          promoFilm={promo}
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
          promoFilm={promo}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
