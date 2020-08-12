import * as React from 'react';
import withShowMore from './with-show-more';
import {shallow} from 'enzyme';
import {mockFilms} from '../../mocks/mock-for-tests';

const MockComponent: React.FC = () => <div />;
const MockComponentWrapped = withShowMore(MockComponent);

it(`return correctly filmsByFilter, without showMoreBtn`, () => {
  const tree = shallow(
      <MockComponentWrapped
        films={mockFilms}
        genre={`Drama`}
      />
  );

  expect(tree.state().showMoreBtn).toEqual(false);
  expect(tree.props().filmsByFilter).toEqual([mockFilms[0], mockFilms[1]]);
});


it(`return correctly filmsByFilter, with showMoreBtn`, () => {
  const tree = shallow(
      <MockComponentWrapped
        films={[...mockFilms, ...mockFilms, ...mockFilms, ...mockFilms, ...mockFilms]}
        genre={`Drama`}
      />
  );

  expect(tree.state().showMoreBtn).toEqual(true);
  expect(tree.state().showCards).toEqual(8);
  expect(tree.state().films.length).toEqual(10);
});
