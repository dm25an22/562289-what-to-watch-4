import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {mockFilms} from "../../mocks/mock-for-tests";
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

it(`renders App component with main component without authorization user`, () => {
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
      <Provider store={store}>
        <App
          currentFilm={-1}
          onSmallCardClick={() => {}}
          films={mockFilms}
          promoFilm={promo}
          isSignIn={false}
          authStatus={AuthorizationStatus.NO_AUTH}
          onSubmitAuth={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders App component with main component with authorization user`, () => {
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
      <Provider store={store}>
        <App
          currentFilm={-1}
          onSmallCardClick={() => {}}
          films={mockFilms}
          promoFilm={promo}
          isSignIn={false}
          authStatus={AuthorizationStatus.AUTH}
          onSubmitAuth={() => {}}
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
    [NameSpace.DATA]: {
      films: mockFilms,
      promoFilm: promo
    },
    [NameSpace.APP_STATE]: {
      currentGenre: `Drama`,
      currentFilm: 2
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          currentFilm={2}
          onSmallCardClick={() => {}}
          films={mockFilms}
          promoFilm={promo}
          isSignIn={false}
          authStatus={AuthorizationStatus.NO_AUTH}
          onSubmitAuth={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it(`renders App component with SiginIn component`, () => {
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
      <Provider store={store}>
        <App
          currentFilm={2}
          onSmallCardClick={() => {}}
          films={mockFilms}
          promoFilm={promo}
          isSignIn={true}
          authStatus={AuthorizationStatus.NO_AUTH}
          onSubmitAuth={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
