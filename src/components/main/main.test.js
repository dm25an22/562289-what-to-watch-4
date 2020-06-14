import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

it(`Render Main`, () => {
  const tree = renderer.create(
      <Main
        titlePromo={`The Grand Budapest Hotel`}
        genrePromo={`Drama`}
        yearPromo={2014}
        filmList={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
