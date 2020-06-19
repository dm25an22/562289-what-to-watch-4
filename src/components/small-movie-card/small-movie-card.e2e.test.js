import React from "react";
import {shallow} from "enzyme";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const mock = [
  {
    title: `Fantastic Beasts`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`
  },
];


describe(`SmallMovieCard`, () => {
  it(`Should onMous on card and click on title card`, () => {
    const onCardMouseOver = jest.fn();
    const onTitleClick = jest.fn();
    const prevention = jest.fn();

    const tree = shallow(
        <SmallMovieCard
          onTitleClick={onTitleClick}
          onCardMouseOver={onCardMouseOver}
          films={mock}
        />
    );

    const filmCard = tree.find(`.small-movie-card`);
    filmCard.forEach((it) => it.props().onMouseOver());

    const filmTitle = tree.find(`.small-movie-card__link`);
    filmTitle.forEach((it) => it.props().onClick({preventDefault: prevention}));

    expect(onTitleClick).toHaveBeenCalledTimes(mock.length);
    expect(prevention).toHaveBeenCalledTimes(mock.length);

    expect(filmCard.length).toBe(mock.length);
    expect(onCardMouseOver).toHaveBeenCalledTimes(mock.length);
  });

});
