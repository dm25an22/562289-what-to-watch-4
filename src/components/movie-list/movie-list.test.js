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
