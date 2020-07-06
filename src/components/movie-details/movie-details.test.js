import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render MoviePage`, () => {
  const tree = renderer.create(
      <MoviePage
        film={mockFilms[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
