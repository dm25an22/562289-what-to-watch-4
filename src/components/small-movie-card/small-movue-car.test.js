import React from "react";
import renderer from "react-test-renderer";
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


it(`Render SmallMovieCard`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        films={mock}
        onMouseOver={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
