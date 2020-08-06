import React from "react";
import {mount} from "enzyme";
import VideoFullScreen from "./video-full-screen.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`check click event on elements`, () => {
  const playClick = jest.fn();
  const fullScreenClick = jest.fn();
  const progressBarClick = jest.fn();
  const togglerMouseDown = jest.fn();

  const tree = mount(
      <VideoFullScreen
        film={mockFilms[0]}
        isPlaying={true}
        timeProgress={`0.00`}
        positionProgress={0}
        renderVideo={() => {}}
        onToggleFullscreen={fullScreenClick}
        onPrgressBarHandler={progressBarClick}
        onDrugTogglerHandler={togglerMouseDown}
        containerRef={React.createRef()}
        togglerRef={React.createRef()}
        isShowConrollerBar={true}
        onPlayHandler={playClick}
      />
  );

  const playBtn = tree.find(`.player__play`);
  const fullScreenBtm = tree.find(`.player__full-screen`);
  const progressBar = tree.find(`.player__progress`);
  const toggler = tree.find(`.player__toggler`);

  playBtn.simulate(`click`);
  fullScreenBtm.simulate(`click`);
  progressBar.simulate(`click`);
  toggler.simulate(`mousedown`);

  expect(playClick).toHaveBeenCalledTimes(1);
  expect(fullScreenClick).toHaveBeenCalledTimes(1);
  expect(progressBarClick).toHaveBeenCalledTimes(1);
  expect(togglerMouseDown).toHaveBeenCalledTimes(1);
});
