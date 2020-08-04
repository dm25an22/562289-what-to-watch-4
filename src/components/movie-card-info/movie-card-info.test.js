import React from "react";
import renderer from "react-test-renderer";
import MovieCardInfo from "./movie-card-info.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`render MovieCardInfo component with active tab "Overview"`, () => {
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

it(`render MovieCardInfo component with active tab "Details"`, () => {
  const tree = renderer.create(
      <MovieCardInfo
        film={mockFilms[1]}
        renderCurrentInfo={() => {}}
        currentTab={`Details`}
        clickOnTab={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render MovieCardInfo component with active tab "Reviews"`, () => {
  const tree = renderer.create(
      <MovieCardInfo
        film={mockFilms[1]}
        renderCurrentInfo={() => {}}
        currentTab={`Reviews`}
        clickOnTab={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


