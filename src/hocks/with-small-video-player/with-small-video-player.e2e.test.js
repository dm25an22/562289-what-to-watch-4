import React from 'react';
import withSmallVideoPlayer from './with-small-video-player';
import {shallow} from 'enzyme';
import {mockFilms} from '../../mocks/mock-for-tests';

const MockComponent = () => <div />;
const MockComponentWrapped = withSmallVideoPlayer(MockComponent);

it(``, () => {
  const tree = shallow(
      <MockComponentWrapped film={mockFilms[0]}/>
  );


});

