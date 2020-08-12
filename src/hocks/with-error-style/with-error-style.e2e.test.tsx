import * as React from 'react';
import withErrorStyle from './with-error-style';
import {shallow} from 'enzyme';

const ERROR_STYLE = {
  NONE: `none`,
  RED_BORDER: `1px solid red`
};

const MockComponent: React.FC = () => <div />;
const MockComponentWrapped = withErrorStyle(MockComponent);

it(`return correctly error style "none"`, () => {
  const tree = shallow(
      <MockComponentWrapped />
  );

  tree.props().hideErrorStyle();
  expect(tree.props().errorStyle).toEqual(ERROR_STYLE.NONE);
});

it(`return correctly error style "red border"`, () => {
  const tree = shallow(
      <MockComponentWrapped />
  );

  tree.props().showErrorStyle();
  expect(tree.props().errorStyle).toEqual(ERROR_STYLE.RED_BORDER);
});
