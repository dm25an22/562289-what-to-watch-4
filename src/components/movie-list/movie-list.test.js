import React from "react";
import renderer from "react-test-renderer";
import MovieList from "../movie-list/movie-list.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Router} from "react-router-dom";
import {history} from "../../history";

const loadMoreButton = (
  <div className="catalog__more">
    <button onClick={() => {}}
      className="catalog__button"
      type="button">Show more</button>
  </div>
);

const loadMoreButton = (
  <div className="catalog__more">
    <button onClick={() => {}}
      className="catalog__button"
      type="button">Show more</button>
  </div>
);

it(`Render MovieList`, () => {
  const currentFilm = mockFilms[0];

  const tree = renderer.create(
<<<<<<< HEAD
      <MovieList
        filmsByFilter={mockFilms.filter((it) => it.genre === currentFilm.genre)}
        onSmallCardClick={() => {}}
      />, {
        createNodeMock: () => ({})
=======
      <Router history={history}>
        <MovieList
          filmsByFilter={mockFilms.filter((it) => it.genre === currentFilm.genre)}
        />
      </Router>, {
        createNodeMock: () => {
          return {};
        }
>>>>>>> route
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render MovieList with loadMoreButton`, () => {
  const currentFilm = mockFilms[0];

  const tree = renderer.create(
<<<<<<< HEAD
      <MovieList
        filmsByFilter={mockFilms.filter((it) => it.genre === currentFilm.genre)}
        onSmallCardClick={() => {}}
      >
        {loadMoreButton}
      </MovieList>, {
        createNodeMock: () => ({})
=======
      <Router history={history} >
        <MovieList
          filmsByFilter={mockFilms.filter((it) => it.genre === currentFilm.genre)}
          onSmallCardClick={() => {}}
        >
          {loadMoreButton}
        </MovieList>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
>>>>>>> route
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render MovieList more like`, () => {
  const currentFilm = mockFilms[0];
  const films = () => {
    const mockFilmsCopy = [...mockFilms.filter((it) => it.genre === currentFilm.genre)];
    const index = mockFilmsCopy.findIndex((it) => it.id === currentFilm.id);
    mockFilmsCopy.splice(index, 1);

    return mockFilmsCopy.slice(0, 4);
  };
  const tree = renderer.create(
<<<<<<< HEAD
      <MovieList
        filmsByFilter={films()}
        onSmallCardClick={() => {}}
      />, {
        createNodeMock: () => ({})
=======
      <Router history={history}>

        <MovieList
          filmsByFilter={films()}
          onSmallCardClick={() => {}}
        />
      </Router>, {
        createNodeMock: () => {
          return {};
        }
>>>>>>> route
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
