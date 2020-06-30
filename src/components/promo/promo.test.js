import React from "react";
import renderer from "react-test-renderer";
import Promo from "./promo.jsx";

const promo = {
  titlePromo: `The Grand Budapest Hotel`,
  genrePromo: `Drama`,
  yearPromo: 2014,
};

it(`Render Promo`, () => {
  const tree = renderer.create(
      <Promo
        promo={promo}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
