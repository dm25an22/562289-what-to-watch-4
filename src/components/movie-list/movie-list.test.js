import React from "react";
import renderer from "react-test-renderer";
import {MovieList} from "../movie-list/movie-list.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render MovieList`, () => {
  const currentFilm = mockFilms[0];

  const tree = renderer.create(
      <MovieList
        films={mockFilms.filter((it) => it.genre === currentFilm.genre)}
        onSmallCardClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
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
      <MovieList
        films={films()}
        onSmallCardClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
