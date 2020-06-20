import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render SmallMovieCard`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        films={mockFilms}
        onCardMouseOver={() => {}}
        onSmallCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
