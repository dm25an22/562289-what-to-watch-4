import * as React from "react";
import * as renderer from "react-test-renderer";
import ButtonAddReview from "./button-add-review";
import {Router} from "react-router-dom";
import {history} from "../../../history";


it(`render ButtonAddReview component`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <ButtonAddReview id={3} />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
