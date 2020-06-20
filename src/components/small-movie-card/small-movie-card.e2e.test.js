import React from "react";
import {shallow} from "enzyme";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";


describe(`SmallMovieCard`, () => {
  it(`Should onMous on card and click on title card`, () => {
    const onCardMouseOver = jest.fn();
    const onSmallCardClick = jest.fn();
    const prevention = jest.fn();

    const tree = shallow(
        <SmallMovieCard
          onSmallCardClick={onSmallCardClick}
          onCardMouseOver={onCardMouseOver}
          films={mockFilms}
        />
    );

    const filmCard = tree.find(`.small-movie-card`);
    filmCard.forEach((it) => it.props().onMouseOver());

    const cardsImg = tree.find(`.small-movie-card__image`);
    cardsImg.forEach((it) => it.props().onClick());

    const filmsTitle = tree.find(`.small-movie-card__link`);
    filmsTitle.forEach((it) => it.props().onClick({preventDefault: prevention}));

    expect(onSmallCardClick).toHaveBeenCalledTimes(mockFilms.length * 2);
    expect(prevention).toHaveBeenCalledTimes(mockFilms.length);

    expect(filmCard.length).toBe(mockFilms.length);
    expect(onCardMouseOver).toHaveBeenCalledTimes(mockFilms.length);
  });

});
