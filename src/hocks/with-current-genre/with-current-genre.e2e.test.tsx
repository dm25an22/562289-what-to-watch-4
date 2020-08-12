import * as React from 'react';
import withCurrentGenre from './with-current-genre';
import {shallow} from 'enzyme';

const MockComponent: React.FC = () => <div />;
const MockComponentWrapped = withCurrentGenre(MockComponent);

it(`return default genre "All genre"`, () => {
  const tree = shallow(
      <MockComponentWrapped
        genres={[`All genre`, `Drama`, `Action`]}
      />
  );

  expect(tree.props().currentGenre).toEqual(`All genre`);
});
it(`return correctly genre`, () => {
  const tree = shallow(
      <MockComponentWrapped
        genres={[`All genre`, `Drama`, `Action`]}
      />
  );

  tree.props().onGenreClick(`Drama`);
  expect(tree.props().currentGenre).toEqual(`Drama`);
});
