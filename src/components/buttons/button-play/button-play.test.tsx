import * as React from "react";
import * as renderer from "react-test-renderer";
import ButtonPlay from "./button-play";
import {Router} from "react-router-dom";
import {history} from "../../../history";


it(`render ButtonPlay component`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <ButtonPlay id={1}/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
