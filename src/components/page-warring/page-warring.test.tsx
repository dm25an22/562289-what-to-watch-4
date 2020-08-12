import * as React from 'react';
import PageWarring from './page-warring';
import * as renderer from "react-test-renderer";

const MockChildren = () => {
  return (
    <div />
  );
};

it(`render PageWarring component`, () => {
  const tree = renderer.create(
      <PageWarring />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render PageWarring component with children`, () => {
  const tree = renderer.create(
      <PageWarring>
        <MockChildren />
      </PageWarring>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
