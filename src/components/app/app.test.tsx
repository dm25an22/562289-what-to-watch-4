import * as React from "react";
import * as renderer from "react-test-renderer";
import {App} from "./app";
import {mockFilms, userDataMock, noop} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";


const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

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

it(`renders App component without authorization user`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      promoFilm: promo,
      favorites: [promo]
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: userDataMock
    }
  });

  window.scrollTo = jest.fn();

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onSubmitAddReview={noop}
          films={mockFilms}
          promoFilm={promo}
          authStatus={AuthorizationStatus.NO_AUTH}
          onSubmitAuth={noop}
          genres={[`All genre`, `Drama`, `Action`]}
          userData={userDataMock}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders App component with authorization user`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      promoFilm: promo,
      favorites: [promo]
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: userDataMock
    }
  });

  window.scrollTo = jest.fn();

  const tree = renderer.create(
      <Provider store={store}>
        <App
          userData={userDataMock}
          onSubmitAddReview={noop}
          films={mockFilms}
          promoFilm={promo}
          authStatus={AuthorizationStatus.AUTH}
          onSubmitAuth={noop}
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


