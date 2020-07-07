import React from "react";
import renderer from "react-test-renderer";
import MovieNav from "./movie-nav";

it(`renders MovieNav component`, () => {
  const tree = renderer.create(
      <MovieNav />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
