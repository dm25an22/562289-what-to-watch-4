import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render SmallMovieCard`, () => {
  const film = mockFilms[1];

  const tree = renderer.create(
      <SmallMovieCard
        film={film}
        index={1}
        onSmallCardClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
