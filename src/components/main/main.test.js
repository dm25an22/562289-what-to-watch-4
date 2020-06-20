import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render Main`, () => {
  const tree = renderer.create(
      <Main
        titlePromo={`The Grand Budapest Hotel`}
        genrePromo={`Drama`}
        yearPromo={2014}
        films={mockFilms}
        onSmallCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
