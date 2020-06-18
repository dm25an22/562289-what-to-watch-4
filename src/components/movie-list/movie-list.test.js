import React from "react";
import renderer from "react-test-renderer";
import MovieList from "../movie-list/movie-list.jsx";

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

it(`Render MovieList`, () => {
  const tree = renderer.create(
      <MovieList
        films={mock}
        onMouseover={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
