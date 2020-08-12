import * as React from 'react';
import withCurrentFilm from './with-current-film';
import {shallow} from 'enzyme';
import {mockFilms} from '../../mocks/mock-for-tests';

const MockComponent: React.FC = () => <div />;
const MockComponentWrapped = withCurrentFilm(MockComponent);

const mockMutch = {
  params: {
    id: 1
  }
};

it(`return correctly film`, () => {
  const tree = shallow(
      <MockComponentWrapped
        films={mockFilms}
        match={mockMutch}
      />
  );

  expect(tree.props().film).toEqual(mockFilms[0]);
});
