import * as React from "react";
import * as renderer from "react-test-renderer";
import Genre from "./genre";
import {noop} from "../../mocks/mock-for-tests";

it(`Render Genre`, () => {
  const tree = renderer.create(
      <Genre
        genre={`All genre`}
        onGenreClick={noop}
        active={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
