import React from "react";
import renderer from "react-test-renderer";
import ButtonPlay from "./button-play.jsx";


it(`render ButtonPlay component`, () => {
  const tree = renderer.create(
      <ButtonPlay />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
