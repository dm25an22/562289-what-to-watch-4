import * as React from "react";
import * as renderer from "react-test-renderer";
import Logo from "./logo";
import {Router} from "react-router-dom";
import {history} from "../../history";


it(`render Logo component`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Logo />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Logo component with class "logo__link--light"`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Logo
          className={`logo__link--light`}
        />
      </Router>

  ).toJSON();

  expect(tree).toMatchSnapshot();
});
