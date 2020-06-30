import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genres-list.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render GenreList`, () => {
  const tree = renderer.create(
      <GenreList
        currentGenre={`All genre`}
        onGenreClick={() => {}}
        films={mockFilms}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
