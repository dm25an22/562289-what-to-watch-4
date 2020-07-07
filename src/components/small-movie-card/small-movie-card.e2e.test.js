import React from "react";
import {shallow} from "enzyme";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

describe(`SmallMovieCard`, () => {
  it(`Click on the title and card`, () => {
    const prevention = jest.fn();
    const film = mockFilms[1];

    const tree = shallow(
        <SmallMovieCard
          film={film}
          index={1}
          onSmallCardClick={() => {}}
          renderVideoPlayer={() => {}}
          startPlayHandler={() => {}}
          stopPlayHandler={() => {}}
          isPlaing={false}
        />
    );

    const card = tree.find(`article`);
    card.props().onClick();

    const filmTitle = tree.find(`a`);
    filmTitle.simulate(`click`, {preventDefault: prevention});

    expect(prevention).toHaveBeenCalledTimes(1);
  });

  it(`mouseEnter on the card and change isPlaing on true `, () => {
    const film = mockFilms[1];
    let isPlaing = false;
    const startPlayHandler = jest.fn(() => {
      isPlaing = true;
    });

    const tree = shallow(
        <SmallMovieCard
          film={film}
          index={1}
          onSmallCardClick={() => {}}
          renderVideoPlayer={() => {}}
          startPlayHandler={startPlayHandler}
          stopPlayHandler={() => {}}
          isPlaing={isPlaing}
        />
    );

    const card = tree.find(`article`);
    card.props().onMouseEnter();

    expect(startPlayHandler).toHaveBeenCalledTimes(1);
    expect(isPlaing).toBeTruthy();
  });

  it(`mouseLeave from the card and change isPlaing on false `, () => {
    const film = mockFilms[1];
    let isPlaing = true;
    const stopPlayHandler = jest.fn(() => {
      isPlaing = false;
    });

    const tree = shallow(
        <SmallMovieCard
          film={film}
          index={1}
          onSmallCardClick={() => {}}
          renderVideoPlayer={() => {}}
          startPlayHandler={() => {}}
          stopPlayHandler={stopPlayHandler}
          isPlaing={isPlaing}
        />
    );

    const card = tree.find(`article`);
    card.props().onMouseLeave();

    expect(stopPlayHandler).toHaveBeenCalledTimes(1);
    expect(isPlaing).toBeFalsy();
  });

});
