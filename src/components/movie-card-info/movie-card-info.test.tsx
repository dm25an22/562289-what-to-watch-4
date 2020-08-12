import * as React from "react";
import * as renderer from "react-test-renderer";
import MovieCardInfo from "./movie-card-info";
import {mockFilms, noop} from "../../mocks/mock-for-tests";

it(`render MovieCardInfo component with active tab "Overview"`, () => {
  const tree = renderer.create(
      <MovieCardInfo
        film={mockFilms[1]}
        renderCurrentInfo={noop}
        currentTab={`Overview`}
        onClickTab={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render MovieCardInfo component with active tab "Details"`, () => {
  const tree = renderer.create(
      <MovieCardInfo
        film={mockFilms[1]}
        renderCurrentInfo={noop}
        currentTab={`Details`}
        onClickTab={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render MovieCardInfo component with active tab "Reviews"`, () => {
  const tree = renderer.create(
      <MovieCardInfo
        film={mockFilms[1]}
        renderCurrentInfo={noop}
        currentTab={`Reviews`}
        onClickTab={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


