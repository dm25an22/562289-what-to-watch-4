import React from "react";
import renderer from "react-test-renderer";
import ButtonPlay from "./button-play.jsx";
import {Router} from "react-router-dom";
import {history} from "../../../history";


it(`render ButtonPlay component`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <ButtonPlay />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
