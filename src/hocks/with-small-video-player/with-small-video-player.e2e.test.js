import React from 'react';
import withSmallVideoPlayer from './with-small-video-player';
import {mount} from 'enzyme';
import {mockFilms} from '../../mocks/mock-for-tests';
import PropTypes from "prop-types";


const MockComponent = ({renderVideoPlayer}) => {
  return (
    <div>
      {renderVideoPlayer()}
    </div>
  );
};

MockComponent.propTypes = {
  renderVideoPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withSmallVideoPlayer(MockComponent);

jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => null);

jest
  .spyOn(window.HTMLMediaElement.prototype, `pause`)
  .mockImplementation(() => null);

it(`after timer expires, vidio.src should be set and set id timer in state`, () => {
  jest.useFakeTimers();

  const tree = mount(
      <MockComponentWrapped film={mockFilms[0]}/>
  );

  tree.instance().onStartPlayHandler();
  jest.advanceTimersByTime(1000);

  const {_videoRef} = tree.instance();
  expect(_videoRef.current.src).toEqual(mockFilms[0].preview);
  expect(tree.instance().state.timeoutId).not.toEqual(null);
});

it(`callback should clear video.src`, () => {
  const tree = mount(
      <MockComponentWrapped film={mockFilms[0]}/>
  );

  tree.instance().onStopPlayHandler();

  const {_videoRef} = tree.instance();
  expect(_videoRef.current.src).not.toEqual(mockFilms[0].preview);
});

