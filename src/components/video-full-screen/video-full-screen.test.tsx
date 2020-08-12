import * as React from "react";
import * as renderer from "react-test-renderer";
import VideoFullScreen from "./video-full-screen";
import {mockFilms, noop} from "../../mocks/mock-for-tests";

it(`render VideoFullScreen with controlls bar and play state`, () => {
  const tree = renderer.create(
      <VideoFullScreen
        film={mockFilms[0]}
        isPlaying={true}
        timeProgress={`0.00`}
        positionProgress={0}
        renderVideo={noop}
        onToggleFullscreen={noop}
        onPrgressBarHandler={noop}
        onDrugTogglerHandler={noop}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={true}
        onPlayHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render VideoFullScreen without controlls bar`, () => {
  const tree = renderer.create(
      <VideoFullScreen
        film={mockFilms[0]}
        isPlaying={true}
        timeProgress={`0.00`}
        positionProgress={0}
        renderVideo={noop}
        onToggleFullscreen={noop}
        onPrgressBarHandler={noop}
        onDrugTogglerHandler={noop}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={false}
        onPlayHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render VideoFullScreen with pause state`, () => {
  const tree = renderer.create(
      <VideoFullScreen
        film={mockFilms[0]}
        isPlaying={false}
        timeProgress={`0.00`}
        positionProgress={0}
        renderVideo={noop}
        onToggleFullscreen={noop}
        onPrgressBarHandler={noop}
        onDrugTogglerHandler={noop}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={true}
        onPlayHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render VideoFullScreen with 50% progress`, () => {
  const tree = renderer.create(
      <VideoFullScreen
        film={mockFilms[0]}
        isPlaying={false}
        timeProgress={`12:40`}
        positionProgress={50}
        renderVideo={noop}
        onToggleFullscreen={noop}
        onPrgressBarHandler={noop}
        onDrugTogglerHandler={noop}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={true}
        onPlayHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
