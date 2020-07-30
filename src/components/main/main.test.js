import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import configureStore from "redux-mock-store";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from "../../history";

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
      promoFilm: promo,
      favorites: [promo]
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
            promoFilm={promo}
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
