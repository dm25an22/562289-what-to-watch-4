import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {mockFilms} from "../../mocks/mock-for-tests";

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

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        titlePromo={`The Grand Budapest Hotel`}
        genrePromo={`Drama`}
        yearPromo={2014}
        films={mockFilms}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
