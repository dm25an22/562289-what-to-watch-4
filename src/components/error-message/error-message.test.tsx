import * as React from 'react';
import * as renderer from "react-test-renderer";
import ErrorMessage from './error-message';

it(`render ErrorMessage component`, () => {
  const tree = renderer.create(
      <ErrorMessage errorCode={404} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
