import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {mockFilms} from "../../mocks/mock-for-tests";

const promo = {
  titlePromo: `The Grand Budapest Hotel`,
  genrePromo: `Drama`,
  yearPromo: 2014,
};

it(`Render Main`, () => {
  const tree = renderer.create(
      <Main
        promo={promo}
        films={mockFilms}
        currentGenre={`All genre`}
        onSmallCardClick={() => {}}
        onGenreClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
