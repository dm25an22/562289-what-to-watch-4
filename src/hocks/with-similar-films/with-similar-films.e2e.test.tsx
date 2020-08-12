import * as React from 'react';
import withSimilarFilms from './with-similar-films';
import {shallow} from 'enzyme';
import {mockFilms} from '../../mocks/mock-for-tests';

const MockComponent: React.FC = () => <div />;
const MockComponentWrapped = withSimilarFilms(MockComponent);

it(`return correctly similar films and deleted current film`, () => {
  const tree = shallow(
      <MockComponentWrapped
        genre={`Drama`}
        films={mockFilms}
        id={1}
      />
  );

  expect(tree.props().filmsByFilter).toEqual([mockFilms[1]]);
});

it(`return correctly similar films and deleted current film`, () => {
  const tree = shallow(
      <MockComponentWrapped
        genre={`Action`}
        films={mockFilms}
        id={3}
      />
  );

  expect(tree.props().filmsByFilter).toEqual([]);
});
