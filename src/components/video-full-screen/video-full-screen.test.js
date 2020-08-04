import React from "react";
import renderer from "react-test-renderer";
import VideoFullScreen from "./video-full-screen.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`render VideoFullScreen with controlls bar and play state`, () => {
  const tree = renderer.create(
      <VideoFullScreen
        film={mockFilms[0]}
        isPlaying={true}
        timeProgress={`0.00`}
        positionProgress={0}
        renderVideo={() => {}}
        toggleFullscreen={() => {}}
        onPrgressBarHandler={() => {}}
        drugTogglerHandler={() => {}}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={true}
        playHandler={() => {}}
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
        renderVideo={() => {}}
        toggleFullscreen={() => {}}
        onPrgressBarHandler={() => {}}
        drugTogglerHandler={() => {}}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={false}
        playHandler={() => {}}
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
        renderVideo={() => {}}
        toggleFullscreen={() => {}}
        onPrgressBarHandler={() => {}}
        drugTogglerHandler={() => {}}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={true}
        playHandler={() => {}}
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
        renderVideo={() => {}}
        toggleFullscreen={() => {}}
        onPrgressBarHandler={() => {}}
        drugTogglerHandler={() => {}}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={true}
        playHandler={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
