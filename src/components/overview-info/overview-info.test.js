import React from "react";
import renderer from "react-test-renderer";
import OverviewInfo from "./overview-info.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`render OverviewInfo component`, () => {
  const tree = renderer.create(
      <OverviewInfo
        film={mockFilms[1]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
