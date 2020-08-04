import React from 'react';
import withFavorite from './with-favorite';
import {shallow} from 'enzyme';
import {mockFilms} from "../../mocks/mock-for-tests";

const MockComponent = () => <div />;
const MockComponentWrapped = withFavorite(MockComponent);

it(`when film is not in the favorites list should return status - 1`, () => {
  const tree = shallow(
      <MockComponentWrapped
        favoriteList={[]}
        film={mockFilms[0]}
        onMyListBtnClick={() => {}}
        authStatus={`AUTH`}
      />
  );

  expect(tree.props().status).toEqual(1);
});

it(`when film is the favorites list should return status - 0`, () => {
  const tree = shallow(
      <MockComponentWrapped
        favoriteList={[mockFilms[0]]}
        film={mockFilms[0]}
        onMyListBtnClick={() => {}}
        authStatus={`AUTH`}
      />
  );

  expect(tree.props().status).toEqual(0);
});
