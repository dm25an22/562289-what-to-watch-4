import React from "react";
import renderer from "react-test-renderer";
import MovieCardInfo from "./movie-card-info.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`render MovieCardInfo component`, () => {
  const tree = renderer.create(
      <MovieCardInfo
        film={mockFilms[1]}
        renderCurrentInfo={() => {}}
        currentTab={`Overview`}
        clickOnTab={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
