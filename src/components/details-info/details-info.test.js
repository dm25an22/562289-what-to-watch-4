import React from "react";
import renderer from "react-test-renderer";
import DetailsInfo from "./details-info.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`render DetailsInfo component`, () => {
  const tree = renderer.create(
      <DetailsInfo
        film={mockFilms[1]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
