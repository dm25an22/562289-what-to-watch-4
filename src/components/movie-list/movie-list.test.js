import React from "react";
import renderer from "react-test-renderer";
import {MovieList} from "../movie-list/movie-list.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render MovieList`, () => {
  const tree = renderer.create(
      <MovieList
        filmsByFilter={mockFilms}
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
  const tree = renderer.create(
      <MovieList
        filmsByFilter={mockFilms.filter((it) => it.genre === mockFilms[0].genre)}
        onSmallCardClick={() => {}}
        similar={true}
        currentFilmId={mockFilms[0].id}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
