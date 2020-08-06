import React from "react";
import renderer from "react-test-renderer";
import MovieNav from "./movie-nav";

it(`renders MovieNav component with activeClass on Overview`, () => {
  const tree = renderer.create(
      <MovieNav
        currentTab={`Overview`}
        onClickTab={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders MovieNav component with activeClass on Details`, () => {
  const tree = renderer.create(
      <MovieNav
        currentTab={`Details`}
        onClickTab={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders MovieNav component with activeClass on Reviews`, () => {
  const tree = renderer.create(
      <MovieNav
        currentTab={`Reviews`}
        onClickTab={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
