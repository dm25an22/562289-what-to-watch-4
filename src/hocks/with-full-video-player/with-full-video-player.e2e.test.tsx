import * as React from "react";
import withFullVideoPlayer from "./with-full-video-player";
import {mount} from "enzyme";
import {mockFilms} from "../../mocks/mock-for-tests";

const MockComponent: React.FC<Props> = ({renderVideo, onPlayHandler}) => {
  return (
    <div>
      {renderVideo()}
      <button onClick={onPlayHandler} id="player__play"></button>
    </div>
  );
};

interface Props {
  renderVideo: () => React.ReactNode,
  onPlayHandler:() => void,
}

const MockComponentwrraped = withFullVideoPlayer(MockComponent);

jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => Promise.reject(jest.fn()));

jest
  .spyOn(window.HTMLMediaElement.prototype, `pause`)
  .mockImplementation(() => Promise.reject(jest.fn()));

it(`test withFullVideoPlayer start play when componentDidMount`, () => {
  const tree = mount(
      <MockComponentwrraped film={mockFilms[0]} />
  );

  tree.instance().componentDidMount();
  expect(tree.instance().state.isPlaying).toBeTruthy();
});

it(`test withFullVideoPlayer click on player__play work corectly `, () => {
  const tree = mount(
      <MockComponentwrraped film={mockFilms[0]} />
  );

  tree.instance().componentDidMount();

  tree.find(`#player__play`).simulate(`click`);

  expect(tree.instance().state.isPlaying).toBeFalsy();

  tree.find(`#player__play`).simulate(`click`);
  expect(tree.instance().state.isPlaying).toBeTruthy();
});

it(`test withFullVideoPlayer click on video change isPlaying state `, () => {
  const tree = mount(
      <MockComponentwrraped film={mockFilms[0]} />
  );

  const video = tree.find(`video`);

  video.simulate(`click`);
  expect(tree.instance().state.isPlaying).toBeFalsy();

  video.simulate(`click`);
  expect(tree.instance().state.isPlaying).toBeTruthy();
});

it(`test withFullVideoPlayer keydown on space change isPlaying state `, () => {
  const map: any = {};
  window.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  const tree = mount(
      <MockComponentwrraped film={mockFilms[0]} />
  );

  map.keydown({keyCode: 32});
  expect(tree.instance().state.isPlaying).toBeFalsy();

  map.keydown({keyCode: 32});
  expect(tree.instance().state.isPlaying).toBeTruthy();
});

