import React from "react";
import {shallow} from "enzyme";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

describe(`SmallMovieCard`, () => {
  it(`Click on the title and card`, () => {
    const onSmallCardClick = jest.fn();
    const prevention = jest.fn();

    const tree = shallow(
        <SmallMovieCard
          film={mockFilms[0]}
          index={1}
          onSmallCardClick={onSmallCardClick}
        />
    );

    const card = tree.find(`article`);
    card.props().onClick();

    const filmTitle = tree.find(`a`);
    filmTitle.simulate(`click`, {preventDefault: prevention});

    expect(prevention).toHaveBeenCalledTimes(1);
    expect(prevention).toHaveBeenCalledTimes(1);

  });

});
