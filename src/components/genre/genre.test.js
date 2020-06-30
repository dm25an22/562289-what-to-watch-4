import React from "react";
import renderer from "react-test-renderer";
import Genre from "./genre.jsx";


it(`Render Genre`, () => {
  const tree = renderer.create(
      <Genre
        genre={`All genre`}
        onGenreClick={() => {}}
        active={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
