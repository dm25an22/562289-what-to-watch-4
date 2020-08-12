import * as React from 'react';
import withCurrentTab from './with-current-tab';
import {shallow} from 'enzyme';

export const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const MockComponent: React.FC = () => <div />;
const MockComponentWrapped = withCurrentTab(MockComponent);

it(`return correctly tab "Overview"`, () => {
  const tree = shallow(
      <MockComponentWrapped />
  );

  expect(tree.props().currentTab).toEqual(TabName.OVERVIEW);
});

it(`return correctly tab "Details`, () => {
  const tree = shallow(
      <MockComponentWrapped />
  );

  tree.props().onClickTab(TabName.DETAILS);
  expect(tree.props().currentTab).toEqual(TabName.DETAILS);
});

it(`return correctly tab "Reviews`, () => {
  const tree = shallow(
      <MockComponentWrapped />
  );

  tree.props().onClickTab(TabName.REVIEWS);
  expect(tree.props().currentTab).toEqual(TabName.REVIEWS);
});
