import React from "react";
import {shallow} from "enzyme";
import Genre from "./genre.jsx";

it(`Renders with a className "active"`, () => {
  const tree = shallow(
      <Genre
        genre={`All genre`}
        onGenreClick={() => {}}
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
        onGenreClick={() => {}}
        active={false}
      />
  );

  const li = tree.find(`li`);

  expect(li.hasClass(`catalog__genres-item--active`)).toBe(false);
});
