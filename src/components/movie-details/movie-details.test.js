import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render MoviePage`, () => {
  const tree = renderer.create(
      <MovieDetails
        film={mockFilms[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
