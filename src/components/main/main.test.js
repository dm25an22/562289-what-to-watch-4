import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import configureStore from "redux-mock-store";
import {mockFilms} from "../../mocks/mock-for-tests";
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

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};
it(`Render Main`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      promoFilm: promo
    },
    [NameSpace.APP_STATE]: {
      currentGenre: `All genre`,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store} >
        <Main
          promoFilm={promo}
          onSmallCardClick={() => {}}
        />
      </Provider>
      , {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
