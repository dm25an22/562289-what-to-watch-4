import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from "react-router-dom";
import {history} from "../../history";

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

it(`Render MoviePage`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onSubmit={() => {}}
          authStatus={AuthorizationStatus.NO_AUTH}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
