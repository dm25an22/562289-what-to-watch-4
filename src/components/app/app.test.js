import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        titlePromo={`The Grand Budapest Hotel`}
        genrePromo={`Drama`}
        yearPromo={2014}
        filmList={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
