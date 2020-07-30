import React from "react";
import renderer from "react-test-renderer";
import ButtonAddReview from "./button-add-review.jsx";


it(`render ButtonAddReview component`, () => {
  const tree = renderer.create(
      <ButtonAddReview />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
