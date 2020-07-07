import React from "react";
import renderer from "react-test-renderer";
import LoadMoreButton from "./load-more-button";

it(`renders LoadMoreButton component`, () => {
  const tree = renderer.create(
      <LoadMoreButton />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
