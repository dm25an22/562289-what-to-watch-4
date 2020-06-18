import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

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
  it(`Should onMous on small card`, () => {
    const onMousOverHandler = jest.fn();
    const tree = shallow(
        <SmallMovieCard
          onMouseOver={onMousOverHandler}
          films={mock}
        />
    );

    const filmCard = tree.find(`.small-movie-card`);
    filmCard.forEach((it) => it.props().onMouseOver());

    expect(filmCard.length).toBe(mock.length);
    expect(onMousOverHandler).toHaveBeenCalledTimes(mock.length);
  });
});
