import React from "react";
import {shallow} from "enzyme";
import MovieNav from "../movie-nav/movie-nav.jsx";

describe(`MovieNav`, () => {
  it(`click on tabs, check preventDefault`, () => {
    const prevention = jest.fn();
    const clickOnTab = jest.fn();
    const tree = shallow(
        <MovieNav
          currentTab={`Overview`}
          clickOnTab={clickOnTab}
        />
    );

    const tabs = tree.find(`a`);
    tabs.forEach((it) => it.simulate(`click`, {preventDefault: prevention}));

    expect(prevention).toHaveBeenCalledTimes(3);
  });

  it(`click on tabs`, () => {
    const prevention = jest.fn();
    const clickOnTab = jest.fn();
    const tree = shallow(
        <MovieNav
          currentTab={`Overview`}
          clickOnTab={clickOnTab}
        />
    );

    const tabs = tree.find(`a`);
    tabs.forEach((it) => it.simulate(`click`, {preventDefault: prevention}));

    expect(clickOnTab).toHaveBeenCalledTimes(3);
  });

});
