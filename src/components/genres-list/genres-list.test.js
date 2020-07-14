import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

it(`Render GenreList`, () => {
  const tree = renderer.create(
      <GenresList
        currentGenre={`All genre`}
        onGenreClick={() => {}}
        genres={[
          `All genre`,
          `Action`,
          `Adventure`
        ]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
