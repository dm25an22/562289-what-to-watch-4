import * as React from "react";
import * as renderer from "react-test-renderer";
import MovieNav from "./movie-nav";
import {noop} from "../../mocks/mock-for-tests";

it(`renders MovieNav component with activeClass on Overview`, () => {
  const tree = renderer.create(
      <MovieNav
        currentTab={`Overview`}
        onClickTab={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders MovieNav component with activeClass on Details`, () => {
  const tree = renderer.create(
      <MovieNav
        currentTab={`Details`}
        onClickTab={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders MovieNav component with activeClass on Reviews`, () => {
  const tree = renderer.create(
      <MovieNav
        currentTab={`Reviews`}
        onClickTab={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
