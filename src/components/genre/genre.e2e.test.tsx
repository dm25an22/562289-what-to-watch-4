import * as React from "react";
import {shallow} from "enzyme";
import Genre from "./genre";
import {noop} from "../../mocks/mock-for-tests";

it(`Renders with a className "active"`, () => {
  const tree = shallow(
      <Genre
        genre={`All genre`}
        onGenreClick={noop}
        active={true}
      />
  );

  const li = tree.find(`li`);

  expect(li.hasClass(`catalog__genres-item--active`)).toBe(true);
});


it(`Renders without a className "active"`, () => {
  const tree = shallow(
      <Genre
        genre={`All genre`}
        onGenreClick={noop}
        active={false}
      />
  );

  const li = tree.find(`li`);

  expect(li.hasClass(`catalog__genres-item--active`)).toBe(false);
});
