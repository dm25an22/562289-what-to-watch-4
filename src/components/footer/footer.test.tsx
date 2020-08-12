import * as React from "react";
import * as renderer from "react-test-renderer";
import Footer from "./footer";
import {Router} from "react-router-dom";
import {history} from "../../history";

it(`renders Footer component`, () => {
  const tree = renderer.create(
      <Router history={history} >
        <Footer />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
