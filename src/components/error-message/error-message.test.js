import React from 'react';
import ErrorMessage from './error-message.jsx';
import renderer from "react-test-renderer";

it(`render ErrorMessage component`, () => {
  const tree = renderer.create(
      <ErrorMessage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
