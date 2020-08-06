import React from "react";
import {shallow} from "enzyme";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
describe(`SmallMovieCard`, () => {
  it(`mouseEnter on the card and change isPlaing on true `, () => {
    const film = mockFilms[1];
    let isPlaing = false;
    const onStartPlayHandler = jest.fn(() => {
      isPlaing = true;
    });

    const tree = shallow(
        <SmallMovieCard
          film={film}
          index={1}
          renderVideoPlayer={() => {}}
          onStartPlayHandler={onStartPlayHandler}
          onStopPlayHandler={() => {}}
          isPlaing={isPlaing}
        />
    );

    const card = tree.find(`article`);
    card.props().onMouseEnter();

    expect(onStartPlayHandler).toHaveBeenCalledTimes(1);
    expect(isPlaing).toBeTruthy();
  });

  it(`mouseLeave from the card and change isPlaing on false `, () => {
    const film = mockFilms[1];
    let isPlaing = true;
    const onStopPlayHandler = jest.fn(() => {
      isPlaing = false;
    });

    const tree = shallow(
        <SmallMovieCard
          film={film}
          index={1}
          renderVideoPlayer={() => {}}
          onStartPlayHandler={() => {}}
          onStopPlayHandler={onStopPlayHandler}
          isPlaing={isPlaing}
        />
    );

    const card = tree.find(`article`);
    card.props().onMouseLeave();

    expect(onStopPlayHandler).toHaveBeenCalledTimes(1);
    expect(isPlaing).toBeFalsy();
  });

});
