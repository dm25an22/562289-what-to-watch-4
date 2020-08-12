import * as React from "react";
import * as renderer from "react-test-renderer";
import DetailsInfo from "./details-info";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`render DetailsInfo component`, () => {
  const tree = renderer.create(
      <DetailsInfo
        film={mockFilms[1]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
